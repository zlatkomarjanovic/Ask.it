import React from 'react';
import Gravatar from 'react-gravatar';
import { useSelector } from 'react-redux';
import { SingleQuestion } from '../../components';
import ProfileLogic from './ProfileLogic';

const Profile = () => {
	const {} = ProfileLogic();
	const currentProfile = useSelector((state) => state.currentProfile.value);
	const data = useSelector((state) => state.questions.value);

	return (
		<div
			className='container
		'
		>
			<div className='container mt-5 bg-light p-5 rounded mb-5 shadow'>
				<div class='d-flex flex-column align-items-center text-center'>
					<Gravatar
						size={120}
						email={currentProfile[0]?.email}
						className='rounded-circle'
					/>
					<div class='mt-3'>
						<h4>
							{currentProfile[0]?.ime} {currentProfile[0]?.prezime}
						</h4>
						<p class='text-secondary mb-1'>{currentProfile[0]?.email}</p>
						<p class='text-muted font-size-sm'>
							Note: We are using Globally Recognized Avatar for your profile
							picture, or, Gravatar for short.
							<br />
							<span>
								<a href='https://en.gravatar.com/'>Click here to learn more.</a>
							</span>
						</p>
						<button
							type='button'
							className='btn btn-primary'
							data-toggle='modal'
							data-target='#exampleModalCenter'
						>
							Edit
						</button>
					</div>
				</div>
			</div>

			<div>
				<h4>Recent questions</h4>
				{data.map((question) => (
					<SingleQuestion key={question.id} question={question} />
				))}
			</div>

			<div
				className='modal fade'
				id='exampleModalCenter'
				role='dialog'
				aria-labelledby='exampleModalCenterTitle'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLongTitle'>
								Edit your profile
							</h5>
						</div>
						<div className='modal-body'>
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
							</form>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-dismiss='modal'
							>
								Close
							</button>
							<button type='button' className='btn btn-primary'>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
