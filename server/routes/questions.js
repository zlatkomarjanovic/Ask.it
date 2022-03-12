const router = require('express').Router();
const pool = require('../db');

router.get('/questions', async (req, res) => {
	try {
		const questions = await pool.query('SELECT * FROM questions');

		res.json(questions.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Server Error');
	}
});

router.get('/question', async (req, res) => {
	try {
		const questions = await pool.query(
			'SELECT * FROM questions WHERE question_id=$1',
			[req.headers.question_id]
		);

		res.json(questions.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Server Error');
	}
});

router.post('/ask', async (req, res) => {
	try {
		const questions = await pool.query(
			'INSERT INTO questions (postedby, title ) VALUES ($1, $2)',
			[req.body.postedby, req.body.title]
		);

		const newRes = await res.json(questions);
		console.log(newRes);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Server Error');
	}
});

router.get('/my-questions', async (req, res) => {
	try {
		const questions = await pool.query(
			'SELECT * FROM questions WHERE postedby=$1',
			[req.headers.postedby]
		);

		res.json(questions.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Server Error');
	}
});

module.exports = router;
