import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	const { email, password } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

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

			console.log(parseRes);
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<>
			<div className='container'>
				<h1 className='text-center my-5'>Login</h1>
				<form onSubmit={onSubmitForm}>
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
				<Link to='/register'>Don't have an account?</Link>
			</div>
		</>
	);
};

export default Login;
