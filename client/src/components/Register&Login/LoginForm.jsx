import React from 'react';
import LoginFormLogic from './LoginFormLogic';

const LoginForm = () => {
	const { submitTheLogin, email, password, onChange } = LoginFormLogic();
	return (
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
			<button className='glass-button-register mt-3'>Submit</button>
		</form>
	);
};

export default LoginForm;
