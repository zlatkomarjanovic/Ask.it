import React from 'react';
import MyQuestionsLogic from './MyQuestionsLogic';
import { SingleQuestion } from '../../components';

const MyQuestions = () => {
	const { questions, currentProfile } = MyQuestionsLogic();

	return (
		<div className='container'>
			<h3 className='m-5'>Some of the questions you recently asked!</h3>
			{questions.map((question) => {
				return (
					<>
						{question.postedbyusr === currentProfile[0].username ? (
							<>
								<SingleQuestion
									key={question.question_id}
									question={question}
								/>
							</>
						) : (
							<></>
						)}
					</>
				);
			})}
		</div>
	);
};

export default MyQuestions;
