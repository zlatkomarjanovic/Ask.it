import { useState } from 'react';

const RegisterLogic = () => {
	//defining the state
	const [inputs, setInputs] = useState({
		ime: '',
		prezime: '',
		email: '',
		password: '',
	});

	const { ime, prezime, email, password } = inputs;

	//populating the state
	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	//submiting the form to the backend
	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { ime, prezime, email, password };

			const response = await fetch('http://localhost:5000/auth/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();

			console.log(parseRes);
			localStorage.setItem('token', parseRes.token);

			//setAuth(true);
		} catch (error) {
			console.error(error.message);
		}
	};
	return {
		onSubmitForm,
		ime,
		onChange,
		prezime,
		email,
		password,
	}; //returning all the necessary values
};

export default RegisterLogic;
