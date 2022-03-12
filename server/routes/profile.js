const router = require('express').Router();
const pool = require('../db');
const authorize = require('../middleware/authorize');

router.get('/profile', authorize, async (req, res) => {
	try {
		const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [
			req.user,
		]);

		res.json(user.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Server Error');
	}
});

module.exports = router;