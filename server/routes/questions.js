const router = require('express').Router();
const { response } = require('express');
const pool = require('../db');
const authorize = require('../middleware/authorize');

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

router.delete('/delete-question', authorize, async (req, res) => {
	try {
		const questions = await pool.query(
			`DELETE FROM questions WHERE question_id='${req.headers.question_id}'`
		);

		res.json(questions.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Issue with getting a single question!');
	}
});

router.put('/update-question', authorize, async (req, res) => {
	try {
		const update = await pool.query(
			`UPDATE questions SET title='${req.headers.title}' WHERE question_id='${req.headers.question_id}' RETURNING *;`
		);

		res.json(update.rows);
	} catch (error) {
		console.error(error.message);
		res
			.status(500)
			.json(
				'An issue occured while updating your comment. We are working on fixing this!'
			);
	}
});

router.post('/ask', async (req, res) => {
	try {
		const response = await pool.query(
			'INSERT INTO questions (postedby, postedbyusr, title, postedbyemail) VALUES ($1, $2, $3, $4)',
			[
				req.body.postedby,
				req.body.postedbyusr,
				req.body.title,
				req.body.postedbyemail,
			]
		);

		return res.json(response);
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
		const username = req.headers.username;
		const question_id = req.headers.question_id;

		const data = (
			await pool.query('SELECT * FROM questions WHERE question_id=$1', [
				req.headers.question_id,
			])
		).rows[0];

		if (!data.upvotes) {
			const upvotes = [username];
			let query = 'UPDATE questions SET upvotes=$1 WHERE question_id=$2';

			const response = pool.query(query, [upvotes, question_id]);

			res.json(response);
		} else if (!data.upvotes.includes(username)) {
			const upvotes = [...data.upvotes, username];
			query = 'UPDATE questions SET upvotes=$1 WHERE question_id=$2';
			const response = pool.query(query, [upvotes, question_id]);
			res.json(response);
		} else {
			res.json('Already upvoted!');
		}
	} catch (error) {
		console.error(error);
	}
});
router.put('/downvote', async (req, res) => {
	try {
		const username = req.headers.username;
		const question_id = req.headers.question_id;
		let query = 'SELECT * FROM questions WHERE question_id=$1';
		const data = (await pool.query(query, [req.headers.question_id])).rows[0];

		if (!data.downvotes) {
			const downvotes = [username];
			query = 'UPDATE questions SET downvotes=$1 WHERE question_id=$2';

			const response = pool.query(query, [downvotes, question_id]);

			res.json(response);
		} else if (!data.downvotes.includes(username)) {
			const downvotes = [...data.downvotes, username];
			query = 'UPDATE questions SET downvotes=$1 WHERE question_id=$2';
			const response = pool.query(query, [downvotes, question_id]);
			res.json(response);
		} else {
			res.json('Already downvoted!');
		}
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;
