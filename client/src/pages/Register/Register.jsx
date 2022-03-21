import React from 'react';
import { Link } from 'react-router-dom';
import RegisterLogic from './RegisterLogic';
import PasswordStrengthBar from 'react-password-strength-bar';

const Register = () => {
	const { submitTheForm, ime, onChange, prezime, email, username, password } =
		RegisterLogic();

	return (
		<div className='container'>
			<h1 className='text-center my-5'>Register</h1>
			<form onSubmit={submitTheForm}>
				<input
					type='text'
					name='ime'
					placeholder='Name'
					className='form-control my-3'
					value={ime}
					onChange={(e) => onChange(e)}
					required
				/>
				<input
					type='text'
					name='prezime'
					placeholder='Surname'
					className='form-control my-3'
					value={prezime}
					onChange={(e) => onChange(e)}
					required
				/>
				<input
					type='text'
					name='username'
					placeholder='Username'
					className='form-control my-3'
					value={username}
					onChange={(e) => onChange(e)}
					required
				/>
				<input
					type='email'
					name='email'
					placeholder='E-mail'
					className='form-control my-3'
					value={email}
					onChange={(e) => onChange(e)}
					required
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					className='form-control my-3'
					minLength={5}
					value={password}
					onChange={(e) => onChange(e)}
					required
				/>
				<PasswordStrengthBar password={password} />
				<button className='btn btn-primary btn-block rounded-5'>Submit</button>
			</form>
			<Link to='/login' className='text-center'>
				<h5>Already have an account?</h5>
			</Link>
		</div>
	);
};

export default Register;
