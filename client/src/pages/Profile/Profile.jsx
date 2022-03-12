import React from 'react';
import Gravatar from 'react-gravatar';
import { useSelector } from 'react-redux';
import { SingleQuestion } from '../../components';
import ProfileLogic from './ProfileLogic';

const Profile = () => {
	const { onChange, ime, prezime, email, password, onSubmitForm } =
		ProfileLogic();
	const currentProfile = useSelector((state) => state.currentProfile.value);
	const data = useSelector((state) => state.questions.value);

	return (
		<div
			className='container
		'
		>
			<div className='container mt-5 bg-light p-5 rounded mb-5 shadow'>
				<div className='d-flex flex-column align-items-center text-center'>
					<Gravatar
						size={120}
						email={currentProfile[0]?.email}
						className='rounded-circle'
					/>
					<div className='mt-3'>
						<h4>
							{currentProfile[0]?.ime} {currentProfile[0]?.prezime}
						</h4>
						<p className='text-secondary mb-1'>{currentProfile[0]?.email}</p>
						<p className='text-muted font-size-sm'>
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
									value={ime}
									onChange={(e) => onChange(e)}
									type='text'
									name='ime'
									placeholder={'Name: ' + currentProfile[0]?.ime}
									className='form-control my-3'
								/>
								<input
									value={prezime}
									onChange={(e) => onChange(e)}
									type='text'
									name='prezime'
									placeholder={'Surname: ' + currentProfile[0]?.prezime}
									className='form-control my-3'
								/>
								<input
									onChange={(e) => onChange(e)}
									value={email}
									type='email'
									name='email'
									placeholder={'Email: ' + currentProfile[0]?.email}
									className='form-control my-3'
								/>
								<input
									onChange={(e) => onChange(e)}
									value={password}
									type='password'
									name='password'
									placeholder='Password'
									className='form-control my-3'
								/>
								<button
									onClick={onSubmitForm}
									type='button'
									className='btn btn-primary btn-block'
									data-dismiss='modal'
								>
									Save changes
								</button>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
