import React from 'react';
import Gravatar from 'react-gravatar';

const ProfileCard = ({ currentProfile }) => {
	return (
		<div className='container mt-5 p-5  mb-5 shadow glass-profile'>
			<div className='d-flex flex-column align-items-center text-center'>
				<Gravatar
					size={120}
					email={currentProfile[0]?.email}
					className='rounded-circle'
				/>
				<div>
					<h2>
						{currentProfile[0]?.ime} {currentProfile[0]?.prezime}
					</h2>
					<h5 className='text-light mb-4'>
						{currentProfile[0]?.email} | @{currentProfile[0]?.username}
					</h5>

					<p className='text-light font-size-sm'>
						Note: We are using Globally Recognized Avatar for your profile
						picture, or, Gravatar for short.
						<br />
						<span>
							<a className='text-light' href='https://en.gravatar.com/'>
								Click here to learn more.
							</a>
						</span>
					</p>
					<button
						type='button'
						className='btn glass-button-register text-light mt-4 mb-4'
						data-toggle='modal'
						data-target='#exampleModalCenter'
					>
						Edit
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
