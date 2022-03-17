const router = require('express').Router();
const pool = require('../db');

router.get('/questions', async (req, res) => {
	try {
		const questions = await pool.query('SELECT * FROM questions');

		res.json(questions.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Issue with getting questions!');
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
		res.status(500).json('Issue with getting a single question');
	}
});

router.post('/ask', async (req, res) => {
	try {
		await pool.query(
			'INSERT INTO questions (postedby, postedbyusr, title, postedbyemail, upvotes, downvotes) VALUES ($1, $2, $3, $4, $5, $6)',
			[
				req.body.postedby,
				req.body.postedbyusr,
				req.body.title,
				req.body.postedbyemail,
				0,
				0,
			]
		);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Issue with asking a question!');
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
		res.status(500).json('Issue with fetching my questions!');
	}
});

router.put('/upvote', async (req, res) => {
	try {
		const response = await pool.query(
			'UPDATE questions SET upvotes = upvotes+1 WHERE question_id=$1',
			[req.headers.question_id]
		);
		res.json(response);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Issue with upvoting!');
	}
});
router.put('/downvote', async (req, res) => {
	try {
		const response = await pool.query(
			'UPDATE questions SET downvotes = downvotes+1 WHERE question_id=$1',
			[req.headers.question_id]
		);
		res.json(response);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Issue with downvoting!');
	}
});
router.put('/unupvote', async (req, res) => {
	try {
		const response = await pool.query(
			'UPDATE questions SET upvotes = upvotes-1 WHERE question_id=$1',
			[req.headers.question_id]
		);
		res.json(response);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Issue with unupvoting!');
	}
});
router.put('/undownvote', async (req, res) => {
	try {
		const response = await pool.query(
			'UPDATE questions SET downvotes = downvotes-1 WHERE question_id=$1',
			[req.headers.postedby]
		);
		res.json(response);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Issue with undownvoting!');
	}
});

module.exports = router;
