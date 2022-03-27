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

//Delete profile

router.delete('/delete-profile', authorize, async (req, res) => {
	try {
		pool.query(
			`DELETE FROM comments WHERE commentedby='${req.headers.user_id}'`
		);
		pool.query(`DELETE FROM questions WHERE postedby='${req.headers.user_id}'`);

		const user = await pool.query(
			`DELETE FROM users WHERE user_id='${req.headers.user_id}'`
		);

		res.json(user.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Issue with getting a single question!');
	}
});

//Get all users
router.get('/users', async (req, res) => {
	try {
		const user = await pool.query(
			'SELECT * FROM users ORDER BY timescommented DESC'
		);

		res.json(user.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Server Error');
	}
});
module.exports = router;
