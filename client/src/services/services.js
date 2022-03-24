import { toast } from 'react-toastify';
//toast is used for those notifications you see when logging in or submiting a question
// Proxy is only used in the development phase. It is ignored in production.
//So, if there is no http://localhost:5000 then by default it is going to use heroku
// domain.

//Updating comment counter

export async function updateCommentCounterQuestions(question_id) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/comment-counter`,
			{
				method: 'PUT',
				headers: { question_id: question_id },
			}
		);
		const parseRes = await response.json();
		return parseRes;
	} catch (error) {
		console.error(error.message);
	}
}

//Getting commentedon questions
export async function GetTheComments(question_id) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/commented-on-question`,
			{
				method: 'GET',
				headers: { question_id: question_id },
			}
		);

		const parseRes = await response.json();
		return parseRes;
	} catch (error) {
		console.error(error.message);
	}
}

//Getting most active users
export async function GetMostActiveUsers() {
	try {
		const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
			method: 'GET',
		});

		const parseRes = await response.json();
		return parseRes;
	} catch (error) {
		console.error(error.message);
	}
}

//Getting a current user
export async function GetCurrentUser() {
	try {
		//proxy

		const response = await fetch(`${process.env.REACT_APP_BASE_URL}/profile`, {
			method: 'GET',
			headers: { token: localStorage.token },
		});

		const parseRes = await response.json();
		return parseRes;
	} catch (error) {
		console.error(error.message);
	}
}

//Fetching Questions
export async function fetchQuestions() {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/questions`,
			{
				method: 'GET',
			}
		);

		const parseRes = await response.json();
		return parseRes;
	} catch (error) {
		console.error(error.message);
	}
}

export async function fetchQuestion(id) {
	try {
		const response = await fetch(`${process.env.REACT_APP_BASE_URL}/question`, {
			method: 'GET',
			headers: { question_id: id },
		});

		const parseRes = await response.json();
		return parseRes;
	} catch (error) {
		console.error(error.message);
	}
}

export async function fetchMyQuestions(postedby) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/my-questions`,
			{
				method: 'GET',
				headers: { postedby },
			}
		);

		const parseRes = await response.json();
		return parseRes;
	} catch (error) {
		console.error(error.message);
	}
}

//Asking a question
export async function ask(e, body) {
	e.preventDefault();
	try {
		await fetch(`${process.env.REACT_APP_BASE_URL}/ask`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});
		toast.success('❓ Question asked!');
	} catch (error) {
		toast.error('⚠️ Something went wrong!');
		console.error(error);
	}
}

export async function deleteQuestion(question_id) {
	try {
		await fetch(`${process.env.REACT_APP_BASE_URL}/delete-question`, {
			method: 'DELETE',
			headers: { question_id: question_id, token: localStorage.token },
		});
		toast.success('❓ Question deleted!');
	} catch (error) {
		toast.error('⚠️ Something went wrong!');
		console.error(error);
	}
}

export async function updateQuestion(question_id, title) {
	try {
		await fetch(`${process.env.REACT_APP_BASE_URL}/update-question`, {
			method: 'PUT',
			headers: { question_id: question_id, token: localStorage.token },
			body: { title: title },
		});
		toast.success('❓ Question deleted!');
	} catch (error) {
		toast.error('⚠️ Something went wrong!');
		console.error(error);
	}
}

//upvote downvote & unupvote undownvote
export async function upvote(question_id) {
	try {
		await fetch(`${process.env.REACT_APP_BASE_URL}/upvote`, {
			method: 'PUT',
			headers: { question_id: question_id },
		});
		toast.success('👍');
	} catch (error) {
		toast.error('⚠️ Something went wrong!');
		console.error(error);
	}
}

export async function downvote(question_id) {
	try {
		await fetch(`${process.env.REACT_APP_BASE_URL}/downvote`, {
			method: 'PUT',
			headers: { question_id: question_id },
		});
		toast.success('👎');
	} catch (error) {
		toast.error('⚠️ Something went wrong!');
		console.error(error);
	}
}
//Updating current user
export async function updateForm(e, body) {
	e.preventDefault();

	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/auth/update-user`,
			{
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			}
		);

		const parseRes = await response.json();
		localStorage.setItem('token', parseRes.jwtToken);

		if (parseRes.jwtToken) {
			toast.success('✅ Updated successfully!');
			localStorage.setItem('token', parseRes.jwtToken);
		} else {
			toast.warning(parseRes);
		}
	} catch (error) {
		toast.error(
			error.message + '. This is a server error. We are working on fixing this.'
		);
		console.error(error.message);
	}
}

//Submiting register form
export async function onSubmitForm(e, body) {
	e.preventDefault();
	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/auth/register`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			}
		);

		const parseRes = await response.json();
		localStorage.setItem('token', parseRes.jwtToken);

		return parseRes;
	} catch (error) {
		console.error(error.message);
		toast.warning(error.message);
	}
}

//Submitting a login form
export async function onSubmitLogin(e, body) {
	e.preventDefault();
	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/auth/login`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			}
		);

		const parseRes = await response.json();

		localStorage.setItem('token', parseRes.jwtToken);
		return parseRes;
	} catch (error) {
		toast.error('⚠️ Something went wrong!' + error.message);
		console.error(error.message);
	}
}

//Posting a comment
export async function sendComment(e, body) {
	e.preventDefault();

	try {
		await fetch(`${process.env.REACT_APP_BASE_URL}/post-comment`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});
		toast.success('💬 Commented!');
	} catch (error) {
		toast.error('⚠️ Something went wrong!');
		console.error(error);
	}
}

export async function getAllComments() {
	try {
		const res = await fetch(`${process.env.REACT_APP_BASE_URL}/comments`, {
			method: 'GET',
		});
		return res.json();
	} catch (error) {
		toast.error('⚠️ Something went wrong!');
		console.error(error);
	}
}

//Updating number of times user commented
export async function updateCommentCounter(currentUser) {
	try {
		await fetch(`${process.env.REACT_APP_BASE_URL}/update`, {
			method: 'PUT',
			headers: {
				user_id: currentUser,
			},
		});
	} catch (error) {
		toast.error('⚠️ Something went wrong!');
		console.error(error);
	}
}

//Authenticating user
export async function isAuthen() {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/auth/verify`,
			{
				method: 'POST',
				headers: { token: localStorage.token },
			}
		);

		const parsedRes = await response.json();
		return parsedRes;
	} catch (error) {
		console.error(error.message);
	}
}
