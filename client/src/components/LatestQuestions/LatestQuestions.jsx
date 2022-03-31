import React from 'react';
import SingleQuestion from '../Questions/SingleQuestion';
import TrendingLogic from './TrendingLogic';
const LatestQuestions = () => {
	const { newQuestions, loadMore, setLoadMore } = TrendingLogic();
	const Button = () => {
		return (
			<>
				{newQuestions.length >= 20 ? (
					<button
						onClick={() => setLoadMore(loadMore + 5)}
						className='btn glass-button-register btn-block'
					>
						Load More
					</button>
				) : (
					<></>
				)}
			</>
		);
	};

	return (
		<div className='container mb-5'>
			<div className='row'>
				{newQuestions.map((question) => (
					<div key={question.question_id} className='w-100'>
						<SingleQuestion key={question.question_id} question={question} />
					</div>
				))}
			</div>
			<Button />
		</div>
	);
};

export default LatestQuestions;
