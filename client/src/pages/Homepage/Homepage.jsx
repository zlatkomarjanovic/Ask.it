import React from 'react';
import {
	HotQuestions,
	MostActiveUsers,
	LatestQuestions,
} from '../../components';
import HomepageLogic from './HomepageLogic';

const Homepage = () => {
	const {} = HomepageLogic();
	return (
		<div className='container'>
			<h4 className='text-light'>🔥 Hot Questions</h4>
			<HotQuestions />
			<h4 className='text-light'>🆕 Latest questions</h4>
			<LatestQuestions />
			<h4 className='text-light'>🕴️ Most active users</h4>
			<MostActiveUsers />
		</div>
	);
};

export default Homepage;
