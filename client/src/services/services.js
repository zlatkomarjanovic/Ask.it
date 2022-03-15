import { toast } from 'react-toastify';
//toast is used for those notifications you see when logging in or submiting a question
// Proxy is only used in the development phase. It is ignored in production.
//So, if there is no http://localhost:5000 then by default it is going to use heroku
// domain.

//Getting a current user
export async function GetCurrentUser() {
	try {
		//proxy

		const response = await fetch('/profile', {
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
		const response = await fetch('/questions', {
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
		const response = await fetch('/question', {
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
		await fetch('/ask', {
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

//Updating current user
export async function updateForm(e, body) {
	e.preventDefault();

	try {
		const response = await fetch('/auth/update-user', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});

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
		const response = await fetch('/auth/register', {
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
		const response = await fetch('/auth/login', {
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
		await fetch('/post-comment', {
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
		const res = await fetch('/comments', {
			method: 'GET',
		});
		return res.json();
	} catch (error) {
		toast.error('⚠️ Something went wrong!');
		console.error(error);
	}
}

//Authenticatinf user
export async function isAuthen() {
	try {
		const response = await fetch('/auth/verify', {
			method: 'POST',
			headers: { token: localStorage.token },
		});

		const parsedRes = await response.json();
		return parsedRes;
	} catch (error) {
		console.error(error.message);
	}
}
