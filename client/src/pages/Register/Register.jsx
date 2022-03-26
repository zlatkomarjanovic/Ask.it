import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import { RegisterForm } from '../../components';

const Register = () => {
	return (
		<div className='container'>
			<h1 className='text-center my-5 text-light'>Register</h1>
			<RegisterForm />
			<Link to='/login' className='text-center text-info'>
				<h5>Already have an account?</h5>
			</Link>
		</div>
	);
};

export default Register;
