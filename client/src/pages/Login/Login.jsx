import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginLogic from './LoginLogic';

const Login = ({ setAuth }) => {
	const { onSubmitForm, email, password, onChange } = LoginLogic();

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
