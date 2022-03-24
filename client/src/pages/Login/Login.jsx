import React from 'react';
import { Link } from 'react-router-dom';
import LoginLogic from './LoginLogic';

const Login = () => {
	const { submitTheLogin, email, password, onChange } = LoginLogic();

	return (
		<>
			<div className='container'>
				<h1 className='text-center my-5 text-light'>Login</h1>
				<form className='glass-container' onSubmit={submitTheLogin}>
					<input
						type='email'
						name='email'
						placeholder='E-mail'
						className={'glass-register-form-control my-3'}
						value={email}
						onChange={(e) => {
							onChange(e);
						}}
					/>
					<input
						type='password'
						name='password'
						placeholder='Password'
						className='glass-register-form-control my-3'
						value={password}
						onChange={(e) => onChange(e)}
					/>
					<button className='btn btn-info btn-block'>Submit</button>
				</form>
				<Link to='/register' className='text-center'>
					<h5>Don't have an account?</h5>
				</Link>
			</div>
		</>
	);
};

export default Login;
