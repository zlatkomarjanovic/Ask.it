import React from 'react';
import SingleQuestion from '../Questions/SingleQuestion';
import TrendingLogic from './TrendingLogic';
const Trending = () => {
	const { newQuestions } = TrendingLogic();

	return (
		<div className='container mb-5'>
			<div className='row'>
				{newQuestions.map((question) => (
					<div key={question.question_id} className='col-sm w-50'>
						<SingleQuestion
							key={question.question_id}
							question={question}
							color='bg-warning'
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Trending;
