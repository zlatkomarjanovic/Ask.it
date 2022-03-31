import React from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';

const EditProfileModal = ({
	currentProfile,
	onChange,
	ime,
	prezime,
	password,
	email,
	onSubmitForm,
	body,
}) => {
	return (
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
								minLength={5}
								type='password'
								name='password'
								placeholder='Password'
								className='form-control my-3'
							/>
							<PasswordStrengthBar
								password={password}
								minLength={5}
								className='password-strength'
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
						<p className='text-secondary'>*All fields must be filled!</p>
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
	);
};

export default EditProfileModal;
