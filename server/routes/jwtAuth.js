const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
//registering

router.post('/register', async (req, res) => {
	const { ime, prezime, email, password } = req.body;
	try {
		const user = await pool.query('SELECT * FROM users WHERE email = $1', [
			email,
		]);

		if (user.rows.length !== 0) {
			return res.status(401).json('User already exist!');
		}

		const salt = await bcrypt.genSalt(10);
		const bcryptPassword = await bcrypt.hash(password, salt);

		let newUser = await pool.query(
			'INSERT INTO users (ime, prezime, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
			[ime, prezime, email, bcryptPassword]
		);

		const token = jwtGenerator(newUser.rows[0].user_id);

		return res.json({ token });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
			email,
		]);

		if (user.rows.length === 0) {
			return res.status(401).json('Password or Email is incorrect!');
		}

		const validPassword = bcrypt.compare(password, user.rows[0].user_password);

		console.log(validPassword);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
