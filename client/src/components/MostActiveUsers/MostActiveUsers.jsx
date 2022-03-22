import React from 'react';
import Gravatar from 'react-gravatar';
import MostActiveUsersLogic from './MostActiveUsersLogic';
import SingleUser from './SingleUser';

const MostActiveUsers = () => {
	const { mostActiveUsersData } = MostActiveUsersLogic();

	console.log(mostActiveUsersData);
	return (
		<div className='container row text-center' align='center'>
			{mostActiveUsersData.map((user) => (
				<>{user.timescommented >= 0 ? <SingleUser user={user} /> : <></>}</>
			))}
		</div>
	);
};

export default MostActiveUsers;
