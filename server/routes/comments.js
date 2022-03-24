const router = require('express').Router();
const pool = require('../db');
const authorize = require('../middleware/authorize');

router.put('/update', async (req, res) => {
	try {
		const response = await pool.query(
			'UPDATE users SET timescommented = timescommented+1 WHERE user_id=$1',
			[req.headers.user_id]
		);
		res.json(response);
	} catch (error) {}
});

router.get('/comments', async (req, res) => {
	try {
		const comments = await pool.query('SELECT * FROM comments');

		res.json(comments.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Server Error');
	}
});

router.post('/post-comment', async (req, res) => {
	try {
		const comment = await pool.query(
			'INSERT INTO comments (commentedonquestion, comment, commentedby, commentedbyuser, commentedbyemail) VALUES($1, $2, $3, $4, $5)',
			[
				req.body.commentedonquestion,
				req.body.comment,
				req.body.commentedby,
				req.body.commentedbyuser,
				req.body.commentedbyemail,
			]
		);

		res.json(comment);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Server Error');
	}
});

router.put('/comment-counter', async (req, res) => {
	try {
		const com = await pool.query(
			`UPDATE questions SET commentcounter = commentcounter+1 WHERE question_id='${req.headers.question_id}'`
		);
		res.json(com.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Something went wrong with updating comment counter');
	}
});

router.delete('/delete-comment', authorize, async (req, res) => {
	try {
		const comments = await pool.query(
			'DROP * FROM comments WHERE comment_id = $1',
			[req.headers.comment_id, req.headers.token]
		);

		const newRes = await res.json(comments);
		console.log(newRes);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Server Error');
	}
});

router.get('/my-comments', async (req, res) => {
	try {
		const mycomments = await pool.query(
			'SELECT * FROM comments WHERE commentedby=$1',
			[req.headers.postedby]
		);

		res.json(mycomments.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Server Error');
	}
});

router.get('/commented-on-question', async (req, res) => {
	try {
		const mycomments = await pool.query(
			`SELECT * FROM questions INNER JOIN comments ON questions.question_id = comments.commentedonquestion WHERE question_id='${req.headers.question_id}'`
		);

		res.json(mycomments.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('Server Error');
	}
});

module.exports = router;
