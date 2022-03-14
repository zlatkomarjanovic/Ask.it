import React from 'react';
import Gravatar from 'react-gravatar';
import QuestionDetailsLogic from './QuestionDetailsLogic';

const QuestionDetails = ({ question }) => {
	const { singleQuestion } = QuestionDetailsLogic();
	console.log(singleQuestion);
	const { title, postedbyusr, postedbyemail } = singleQuestion[0];

	return (
		<div className='container mt-5'>
			<Gravatar email={postedbyemail} size='100' className='rounded-circle' />
			<h2>{title}</h2>
			<h5>{postedbyusr}</h5>
			<div>Comments section</div>
		</div>
	);
};

export default QuestionDetails;
