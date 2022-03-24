import React from 'react';
import { Link } from 'react-router-dom';
import RegisterLogic from './RegisterLogic';
import PasswordStrengthBar from 'react-password-strength-bar';
import './register.css';

const Register = () => {
	const { submitTheForm, ime, onChange, prezime, email, username, password } =
		RegisterLogic();

	return (
		<div className='container'>
			<h1 className='text-center my-5 text-light'>Register</h1>
			<form className='glass-container' onSubmit={submitTheForm}>
				<div className='d-flex'>
					<input
						type='text'
						name='ime'
						placeholder='Name'
						className='glass-register-form-control my-3 margin-right'
						value={ime}
						onChange={(e) => onChange(e)}
						required
					/>
					<input
						type='text'
						name='prezime'
						placeholder='Surname'
						className='glass-register-form-control my-3'
						value={prezime}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<input
					type='text'
					name='username'
					placeholder='Username'
					className='glass-register-form-control my-3'
					value={username}
					onChange={(e) => onChange(e)}
					required
				/>
				<input
					type='email'
					name='email'
					placeholder='E-mail'
					className='glass-register-form-control my-3'
					value={email}
					onChange={(e) => onChange(e)}
					required
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					className='glass-register-form-control my-3'
					minLength={5}
					value={password}
					onChange={(e) => onChange(e)}
					required
				/>
				<PasswordStrengthBar
					password={password}
					minLength={5}
					className='password-strength'
				/>
				<button className='glass-button-register'>Submit</button>
			</form>
			<Link to='/login' className='text-center text-info'>
				<h5>Already have an account?</h5>
			</Link>
		</div>
	);
};

export default Register;
