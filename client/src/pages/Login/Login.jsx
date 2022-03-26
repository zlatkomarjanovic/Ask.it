import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/Register&Login/LoginForm';

const Login = () => {
	return (
		<>
			<div className='container'>
				<h1 className='text-center my-5 text-light'>Login</h1>
				<LoginForm />
				<Link to='/register' className='text-center text-info'>
					<h5>Don't have an account?</h5>
				</Link>
			</div>
		</>
	);
};

export default Login;
