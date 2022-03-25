import React from 'react';
import MostActiveUsersLogic from './MostActiveUsersLogic';
import SingleUser from './SingleUser';
import './mau.css';
const MostActiveUsers = () => {
	const { newUserData } = MostActiveUsersLogic();

	return (
		<div
			className='mx-auto container row text-center mb-5 justify-content-center'
			align='center'
		>
			{newUserData.map((user) => (
				<SingleUser key={user.user_id} user={user} />
			))}
		</div>
	);
};

export default MostActiveUsers;
