import React from 'react';
import ProfileLogic from './ProfileLogic';
import './profile.css';
import ProfileCard from '../../components/Profile/ProfileCard';
import RecentQuestions from '../../components/Profile/RecentQuestions';
import EditProfileModal from '../../components/Profile/EditProfileModal';

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
			<ProfileCard currentProfile={currentProfile} />
			<RecentQuestions
				newQuestions={newQuestions}
				currentProfile={currentProfile}
			/>
			<EditProfileModal
				currentProfile={currentProfile}
				onChange={onChange}
				ime={ime}
				prezime={prezime}
				password={password}
				email={email}
				onSubmitForm={onSubmitForm}
				body={body}
			/>
		</div>
	);
};

export default Profile;
