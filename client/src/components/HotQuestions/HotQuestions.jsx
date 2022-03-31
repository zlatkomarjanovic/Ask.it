import React from 'react';
import SingleQuestion from '../Questions/SingleQuestion';
import HotQuestionsLogic from './HotQuestionsLogic';
const HotQuestions = () => {
	const { filteredQuestions, setLoadMore, loadMore } = HotQuestionsLogic();

	const Button = () => {
		return (
			<>
				{filteredQuestions.length > 5 ? (
					<button
						onClick={() => setLoadMore(loadMore + 5)}
						className='btn btn-primary btn-block'
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
				{filteredQuestions.map((question) => (
					<div key={question.question_id} className='col'>
						<SingleQuestion
							key={question.question_id}
							question={question}
							color='bg-primary'
							hot={true}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default HotQuestions;
