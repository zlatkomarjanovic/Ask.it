const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../db');
const validInfo = require('../middleware/validInfo');
const jwtGenerator = require('../utils/jwtGenerator');
const authorize = require('../middleware/authorize');

//authorizeentication

router.post('/register', validInfo, async (req, res) => {
	const { ime, prezime, email, username, password } = req.body;

	try {
		const user = await pool.query('SELECT * FROM users WHERE email = $1', [
			email,
		]);

		if (user.rows.length > 0) {
			return res.status(401).json('User already exist!');
		}

		const salt = await bcrypt.genSalt(10);
		const bcryptPassword = await bcrypt.hash(password, salt);

		let newUser = await pool.query(
			'INSERT INTO users (ime, prezime, username, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
			[ime, prezime, username, email, bcryptPassword]
		);

		const jwtToken = jwtGenerator(newUser.rows[0].user_id);

		return res.json({ jwtToken });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.put('/update-user', validInfo, async (req, res) => {
	const { ime, prezime, email, password, user_id } = req.body;

	try {
		const salt = await bcrypt.genSalt(10);
		const bcryptPassword = await bcrypt.hash(password, salt);

		let updatedUser = await pool.query(
			'UPDATE users SET ime=$1, prezime=$2, email=$3, password=$4 WHERE user_id = $5 RETURNING *',
			[ime, prezime, email, bcryptPassword, user_id]
		);

		const jwtToken = jwtGenerator(updatedUser.rows[0].user_id);

		return res.json({ jwtToken });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.post('/login', validInfo, async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await pool.query('SELECT * FROM users WHERE email = $1', [
			email,
		]);

		if (user.rows.length === 0) {
			return res.status(401).json('Invalid Credential');
		}

		const validPassword = await bcrypt.compare(password, user.rows[0].password);

		if (!validPassword) {
			return res.status(401).json('Invalid Credential');
		}
		const jwtToken = jwtGenerator(user.rows[0].user_id);
		return res.json({ jwtToken });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.post('/verify', authorize, (req, res) => {
	try {
		res.json(true);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
