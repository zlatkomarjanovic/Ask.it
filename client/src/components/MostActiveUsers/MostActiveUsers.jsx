import React from 'react';
import MostActiveUsersLogic from './MostActiveUsersLogic';
import SingleUser from './SingleUser';
import './mau.css';
const MostActiveUsers = () => {
	const { mostActiveUsersData } = MostActiveUsersLogic();
	const newUserData = Array.from(mostActiveUsersData).filter(
		(user) => user.timescommented >= 0
	);
	return (
		<div className='mx-auto container row text-center mb-5' align='center'>
			{newUserData.map((user) => (
				<SingleUser key={user.user_id} user={user} />
			))}
		</div>
	);
};

export default MostActiveUsers;
