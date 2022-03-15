import React from 'react';
import MyQuestionsLogic from './MyQuestionsLogic';
import { SingleQuestion } from '../../components';

const MyQuestions = () => {
	const { newQuestions, currentProfile, setLoadMore, loadMore } =
		MyQuestionsLogic();

	return (
		<div className='container'>
			<h3 className='m-5'>Some of the questions you recently asked!</h3>
			{newQuestions.map((question) => {
				return (
					<>
						{question.postedbyusr === currentProfile[0].username ? (
							<>
								<SingleQuestion
									key={question.question_id}
									question={question}
									color='bg-primary'
								/>
							</>
						) : (
							<></>
						)}
					</>
				);
			})}
			<button
				onClick={() => setLoadMore(loadMore + 2)}
				className='btn btn-block btn-primary p-3'
			>
				Load more
			</button>
		</div>
	);
};

export default MyQuestions;
