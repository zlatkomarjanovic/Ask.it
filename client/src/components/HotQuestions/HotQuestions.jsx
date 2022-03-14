import React from 'react';
import SingleQuestion from '../Questions/SingleQuestion';
import HotQuestionsLogic from './HotQuestionsLogic';

const HotQuestions = () => {
	const { newQuestions, setLoadMore } = HotQuestionsLogic;

	return (
		<div>
			<button className='btn btn-primary btn-block'>Load More</button>
		</div>
	);
};

export default HotQuestions;
