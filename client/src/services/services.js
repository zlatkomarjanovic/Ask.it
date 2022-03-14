import { toast } from 'react-toastify';
//toast is used for those notifications you see when logging in or submiting a question

//Getting a current user
export async function GetCurrentUser() {
	try {
		const response = await fetch('http://localhost:5000/profile', {
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
		const response = await fetch('http://localhost:5000/questions', {
			method: 'GET',
		});

		const parseRes = await response.json();
		return parseRes;
	} catch (error) {
		console.error(error.message);
	}
}

export async function fetchQuestion(id) {
	try {
		const response = await fetch('http://localhost:5000/question', {
			method: 'GET',
			headers: { question_id: id },
		});

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
		await fetch('http://localhost:5000/ask', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});
		toast.success('Question asked! Relaod the page to see the changes!');
	} catch (error) {
		toast.warning('Something went wrong!');
		console.error(error);
	}
}

//Updating current user
export async function updateForm(e, body) {
	e.preventDefault();

	try {
		const response = await fetch('http://localhost:5000/auth/update-user', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});

		const parseRes = await response.json();
		localStorage.setItem('token', parseRes.jwtToken);

		if (parseRes.jwtToken) {
			toast.success('Updated successfully!');
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
		const response = await fetch('http://localhost:5000/auth/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});

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
		const response = await fetch('http://localhost:5000/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});

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
		await fetch('http://localhost:5000/post-comment', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});
		toast.success('💬 Commented! Relaod the page to see the changes!');
	} catch (error) {
		toast.error('⚠️ Something went wrong!');
		console.error(error);
	}
}

export async function getAllComments() {
	try {
		const res = await fetch('http://localhost:5000/comments', {
			method: 'GET',
		});
		return res.json();
	} catch (error) {
		toast.error('⚠️ Something went wrong!');
		console.error(error);
	}
}
