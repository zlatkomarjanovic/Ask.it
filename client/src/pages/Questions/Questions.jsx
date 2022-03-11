import React from 'react';
import { SingleQuestion } from '../../components';
import QuestionsLogic from './QuestionsLogic';
import { useSelector } from 'react-redux';

const Questions = () => {
	const { fetchQuestions } = QuestionsLogic();
	const data = useSelector((state) => state.questions.value);

	return (
		<div className='container p-3'>
			<h3 className='mb-5'>Questions</h3>

			{data.map((question) => (
				<SingleQuestion key={question.id} question={question} />
			))}
		</div>
	);
};

export default Questions;
