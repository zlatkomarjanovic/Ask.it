import React from 'react';
import Gravatar from 'react-gravatar';
import MostActiveUsersLogic from './MostActiveUsersLogic';

const MostActiveUsers = () => {
	const { mostActiveUsersData } = MostActiveUsersLogic();

	console.log(mostActiveUsersData);
	return (
		<div className='container row'>
			<h6>Some of our most active users</h6>
			{mostActiveUsersData.map((user) => (
				<>
					{user.timescommented >= 0 ? (
						<div
							className='card rounded-5 mx-3 my-3 shadow'
							style={{ width: '20rem' }}
						>
							<Gravatar
								size={110}
								style={{ objectFit: 'cover' }}
								className='card-img-top'
								email={user.email}
							/>
							<div class='card-body'>
								<h5 class='card-title'>
									{user.ime} {user.prezime}
								</h5>
								<p class='card-text'>@{user.username}</p>
							</div>
						</div>
					) : (
						<></>
					)}
				</>
			))}
		</div>
	);
};

export default MostActiveUsers;
