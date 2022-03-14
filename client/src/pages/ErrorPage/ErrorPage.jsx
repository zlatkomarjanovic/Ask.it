import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div className='container'>
			<img
				className='w-100'
				src='https://cdn.dribbble.com/users/879147/screenshots/6766595/404_4x.jpg?compress=1&resize=400x300'
				alt='Error 404 - Page Not Found'
			/>
			<h4 className='text-center m-5'>
				Page not found. The passed URL does not exist.
			</h4>
			<NavLink className='btn btn-block btn-info' to='/'>
				Go Back to Home
			</NavLink>
		</div>
	);
};

export default ErrorPage;
