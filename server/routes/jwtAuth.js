const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validInfo');
const authorize = require('../middleware/authorize');
//registering

router.post('/register', validInfo, async (req, res) => {
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

router.post('/login', validInfo, async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await pool.query('SELECT * FROM users WHERE email = $1', [
			email,
		]);

		if (user.rows.length === 0) {
			return res.status(401).json('Invalid Credentials');
		}

		const validPassword = await bcrypt.compare(password, user.rows[0].password);

		if (!validPassword) {
			return res.status(401).json('Invalid Credentials');
		}
		const token = jwtGenerator(user.rows[0].user_id);
		res.json(token);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

router.get('/verify', authorize, async (req, res) => {
	try {
		res.json(true);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
