import { useState } from 'react';

const LoginLogic = () => {
	//defining the inputs
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	//destructuring the inputs
	const { email, password } = inputs;

	//setting the inputs
	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	//submiting the form
	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { email, password };

			const response = await fetch('http://localhost:5000/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();

			localStorage.setItem('token', parseRes.jwtToken);
		} catch (error) {
			console.error(error.message);
		}
	};
	//returning the necessary values
	return { onSubmitForm, email, onChange, password };
};

export default LoginLogic;
