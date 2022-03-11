import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<>
			<footer className='footer bg-dark text-center text-white'>
				<div className='container p-4 pb-0 mt-2'>
					<section className='mb-5'>
						<h1>An app created for MOP task</h1>
					</section>
				</div>

				<div
					className='text-center p-3'
					style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
				>
					© 2020 Copyright:
					<a className='text-white' href='https://mdbootstrap.com/'>
						Zlatko Marjanović; Lafo
					</a>
				</div>
			</footer>
		</>
	);
};

export default Footer;
