import React from 'react';
import MyQuestionsLogic from './MyQuestionsLogic';
import { SingleQuestion } from '../../components';

const MyQuestions = () => {
	const { questions, currentProfile } = MyQuestionsLogic();

	//console.log(questions);

	return (
		<div className='container'>
			{console.log(currentProfile)}
			<h4 className='m-5'>Some of the questions you recently asked!</h4>
			{questions.map((question) => {
				console.log(question);
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
