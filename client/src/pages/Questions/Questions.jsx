import React from 'react';
import { Ask, SingleQuestion } from '../../components';
import QuestionsLogic from './QuestionsLogic';
import './questions.css';

const QuestionsRender = ({ newQuestions }) => {
	return (
		<>
			{newQuestions.map((question) => (
				<SingleQuestion key={question.question_id} question={question} />
			))}
		</>
	);
};

const Button = ({ newQuestions, setLoadMore, loadmore }) => {
	return (
		<>
			{newQuestions.length > 5 ? (
				<button
					onClick={() => setLoadMore(loadmore + 5)}
					className='btn btn-block glass-button-register text-light'
				>
					Load more
				</button>
			) : (
				<div className='text-light'>
					<h4>You have the honor to ask the first questions!</h4>
				</div>
			)}
		</>
	);
};

const Questions = () => {
	const {
		askTheQuestion,
		onChange,
		questionToAsk,
		newQuestions,
		isAuth,
		setLoadMore,
		loadmore,
	} = QuestionsLogic();

	return (
		<div className='container p-3'>
			<h3 className='mb-5 text-light'>Questions</h3>
			<Ask
				isAuth={isAuth}
				questionToAsk={questionToAsk}
				onChange={onChange}
				askTheQuestion={askTheQuestion}
			/>
			<QuestionsRender newQuestions={newQuestions} />
			<Button
				newQuestions={newQuestions}
				setLoadMore={setLoadMore}
				loadmore={loadmore}
			/>
		</div>
	);
};

export default Questions;
