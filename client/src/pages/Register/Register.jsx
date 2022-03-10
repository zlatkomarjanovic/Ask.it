import React from 'react';
import { Link } from 'react-router-dom';
import RegisterLogic from './RegisterLogic';

const Register = () => {
	const { onSubmitForm, ime, onChange, prezime, email, password } =
		RegisterLogic();

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
				<button className='btn btn-primary btn-block rounded-5'>Submit</button>
			</form>
			<Link to='/login'>Already have an account?</Link>
		</div>
	);
};

export default Register;
