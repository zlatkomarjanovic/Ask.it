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
				<div class='card-body'>
					<h5 class='card-title'>
						{user.ime} {user.prezime}
					</h5>
					<p class='card-text bg-primary p-2 rounded-3'>@{user.username} 🥇</p>
				</div>
			</div>
		</>
	);
};

export default SingleUser;
