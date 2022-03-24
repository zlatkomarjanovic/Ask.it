import React from 'react';
import Gravatar from 'react-gravatar';
import './mau.css';
const SingleUser = ({ user }) => {
	return (
		<>
			<div className='card rounded-5 mx-3 my-3 shadow glass-users justify-content-center width'>
				<Gravatar
					size={110}
					style={{ objectFit: 'cover' }}
					className='rounded-circle active-user-img'
					email={user.email}
				/>
				<div className='card-body'>
					<h5 className='card-title'>
						{user.ime} {user.prezime}
					</h5>
					<p className='card-text  p-2  card-text-glass'>@{user.username} 🥇</p>
				</div>
			</div>
		</>
	);
};

export default SingleUser;
