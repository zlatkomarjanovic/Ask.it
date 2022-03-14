import React from 'react';
import { HotQuestions, MostActiveUsers, Trending } from '../../components';
import HomepageLogic from './HomepageLogic';

const Homepage = () => {
	const {} = HomepageLogic();
	return (
		<div className='container'>
			<h4>🆕Latest questions</h4>
			<Trending />
			<h4>🔥Hot Questions</h4>
			<HotQuestions />
			<h4>Most active users</h4>
			<MostActiveUsers />
		</div>
	);
};

export default Homepage;
