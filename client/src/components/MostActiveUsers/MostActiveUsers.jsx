import React from 'react';
import MostActiveUsersLogic from './MostActiveUsersLogic';
import SingleUser from './SingleUser';

const MostActiveUsers = () => {
	const { mostActiveUsersData } = MostActiveUsersLogic();
	const newUserData = Array.from(mostActiveUsersData).filter(
		(user) => user.timescommented >= 0
	);
	return (
		<div className='mx-auto container row text-center' align='center'>
			{newUserData.map((user) => (
				<SingleUser key={user.user_id} user={user} />
			))}
		</div>
	);
};

export default MostActiveUsers;
