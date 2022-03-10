import React from 'react';

const Profile = () => {
	return (
		<div
			className='container
		'
		>
			<h3>My Profile</h3>
			<h4>Name: </h4>
			<h4>Surname: </h4>
			<h4>E-mail: </h4>
			<h4>Password: </h4>
			<button className='btn btn-warning'>Edit</button>
			<form>
				<input
					type='text'
					name='ime'
					placeholder='Ime'
					className='form-control my-3'
				/>
				<input
					type='text'
					name='prezime'
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
				<input
					type='password'
					name='confirmPassword'
					placeholder='Confirm Password'
					className='form-control my-3'
				/>
				<button className='btn btn-primary btn-block rounded-5'>Submit</button>
			</form>
		</div>
	);
};

export default Profile;
