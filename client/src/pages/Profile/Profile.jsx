import React from 'react';
import Gravatar from 'react-gravatar';
import { NavLink } from 'react-router-dom';
import { SingleQuestion } from '../../components';
import ProfileLogic from './ProfileLogic';
import './profile.css';

const Profile = () => {
	const {
		onChange,
		ime,
		prezime,
		email,
		password,
		onSubmitForm,
		currentProfile,
		newQuestions,
		body,
	} = ProfileLogic();

	return (
		<div
			className='container
		'
		>
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

			<div>
				<h4 className='text-light'>Recent questions</h4>
				{newQuestions.map((question) => {
					return (
						<>
							{question.postedbyusr === currentProfile[0].username ? (
								<>
									<SingleQuestion
										key={question.question_id}
										question={question}
										color='bg-primary'
									/>
								</>
							) : (
								<></>
							)}
						</>
					);
				})}
				{newQuestions.length > 3 ? (
					<NavLink
						className='btn btn-block glass-register-button'
						to='/my-questions'
					>
						My Questions
					</NavLink>
				) : (
					<></>
				)}
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
									onClick={(e) => onSubmitForm(e, body)}
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
