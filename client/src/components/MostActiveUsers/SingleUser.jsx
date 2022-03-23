import React from 'react';
import Gravatar from 'react-gravatar';

const SingleUser = ({ user }) => {
	return (
		<>
			<div
				className='card rounded-5 mx-3 my-3 shadow'
				style={{ width: '20rem' }}
			>
				<Gravatar
					size={110}
					style={{ objectFit: 'cover' }}
					className='card-img-top'
					email={user.email}
				/>
				<div className='card-body'>
					<h5 className='card-title'>
						{user.ime} {user.prezime}
					</h5>
					<p className='card-text bg-primary p-2 rounded-3'>
						@{user.username} 🥇
					</p>
				</div>
			</div>
		</>
	);
};

export default SingleUser;
