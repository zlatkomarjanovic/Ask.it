import React from 'react';
import Gravatar from 'react-gravatar';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { deleteUser } from '../../services/services';

const ProfileCard = ({ currentProfile, deleteMyProfile }) => {
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
					<div className='d-flex'>
						<button
							type='button'
							className=' mx-4 btn glass-button-register text-light mt-4 text-center'
							data-toggle='modal'
							data-target='#exampleModalCenter'
						>
							<AiFillEdit className='mx-3' size={30} />
						</button>
						<button
							onClick={() => deleteMyProfile(currentProfile[0]?.user_id)}
							type='button'
							className='btn btn-block glass-button-danger text-light mt-4'
						>
							<AiFillDelete className='mx-3' size={30} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
