import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		ime: '',
		prezime: '',
		email: '',
		password: '',
	});

	const { ime, prezime, email, password } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

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

			localStorage.setItem('token', parseRes.token);

			setAuth(true);
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className='container'>
			<h1 className='text-center my-5'>Register</h1>
			<form onSubmit={onSubmitForm}>
				<input
					type='text'
					name='ime'
					placeholder='Ime'
					className='form-control my-3'
					value={ime}
					onChange={(e) => onChange(e)}
				/>
				<input
					type='text'
					name='prezime'
					placeholder='Prezime'
					className='form-control my-3'
					value={prezime}
					onChange={(e) => onChange(e)}
				/>
				<input
					type='email'
					name='email'
					placeholder='E-mail'
					className='form-control my-3'
					value={email}
					onChange={(e) => onChange(e)}
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					className='form-control my-3'
					value={password}
					onChange={(e) => onChange(e)}
				/>
				<button className='btn btn-info btn-block'>Submit</button>
			</form>
			<Link to='/login'>Already have an account?</Link>
		</div>
	);
};

export default Register;
