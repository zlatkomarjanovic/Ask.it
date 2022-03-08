import React, { useState } from 'react';

const Register = () => {
	return (
		<div className='container'>
			<h1>Register</h1>
			<form>
				<input
					type='text'
					name='name'
					placeholder='Ime'
					className='form-control my-3'
				/>
				<input
					type='text'
					name='surname'
					placeholder='Prezime'
					className='form-control my-3'
				/>
				<input
					type='email'
					name='email'
					placeholder='E-mail'
					className='form-control my-3'
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					className='form-control my-3'
				/>
				<button className='btn btn-info btn-block'>Submit</button>
			</form>
		</div>
	);
};

export default Register;
