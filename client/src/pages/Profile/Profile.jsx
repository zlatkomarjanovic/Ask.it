import React from 'react';
import ProfileLogic from './ProfileLogic';
import './profile.css';
import {
	EditProfileModal,
	ProfileCard,
	RecentQuestions,
} from '../../components';

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
		deleteMyProfile,
	} = ProfileLogic();

	return (
		<div
			className='container
		'
		>
			<ProfileCard
				currentProfile={currentProfile}
				deleteMyProfile={deleteMyProfile}
			/>
			<RecentQuestions
				newQuestions={newQuestions}
				currentProfile={currentProfile}
			/>
			<EditProfileModal
				onChange={onChange}
				onSubmitForm={onSubmitForm}
				currentProfile={currentProfile}
				ime={ime}
				prezime={prezime}
				password={password}
				email={email}
				body={body}
			/>
		</div>
	);
};

export default Profile;
