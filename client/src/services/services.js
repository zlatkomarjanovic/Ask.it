import { toast } from 'react-toastify';

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

export async function ask(body) {
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

export async function updateForm(e, body) {
	e.preventDefault();
	console.log(body, e);
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
