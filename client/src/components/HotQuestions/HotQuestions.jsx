import React from 'react';
import SingleQuestion from '../Questions/SingleQuestion';
import HotQuestionsLogic from './HotQuestionsLogic';
const HotQuestions = () => {
	const { newQuestions, setLoadMore, loadMore } = HotQuestionsLogic();

	return (
		<div className='container mb-5'>
			<div className='row'>
				{newQuestions.map((question) => (
					<>
						{question.upvotes >= 20 ? (
							<div key={question.question_id} className='w-100'>
								<SingleQuestion
									key={question.question_id}
									question={question}
									color='bg-primary'
									hot={true}
								/>
							</div>
						) : (
							<></>
						)}
					</>
				))}
			</div>
			{newQuestions.length > 5 ? (
				<button
					onClick={() => setLoadMore(loadMore + 5)}
					className='btn btn-primary btn-block'
				>
					Load More
				</button>
			) : (
				<></>
			)}
		</div>
	);
};

export default HotQuestions;
