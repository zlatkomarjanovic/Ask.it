import React from 'react';
import { NavLink } from 'react-router-dom';
import imgsrc from '../../assets/404.png';
const ErrorPage = () => {
	return (
		<div className='container glass-container text-center'>
			<img
				className='w-75 mb-5'
				src={imgsrc}
				alt='Error 404 - Page Not Found'
			/>

			<NavLink
				className='btn btn-block glass-button-register mb-5 text-light'
				to='/'
			>
				Go Back to Home
			</NavLink>
		</div>
	);
};

export default ErrorPage;
