import React from 'react';
import { SingleQuestion } from '../../components';
import QuestionsLogic from './QuestionsLogic';
import './questions.css';
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
			<div className='m-5'>
				{isAuth === true ? (
					<>
						<div className='input-group'>
							<input
								className='glass-form-control'
								name='title'
								type='text'
								placeholder='Ask... And the community shall answer!'
								value={questionToAsk.title}
								onChange={(e) => onChange(e)}
							/>
							<span className='input-group-btn'>
								<button
									onClick={askTheQuestion}
									className='btn  input-group-prepend glass-button'
								>
									Ask!
								</button>
							</span>
						</div>
					</>
				) : (
					<></>
				)}
			</div>

			{newQuestions.map((question) => (
				<SingleQuestion key={question.question_id} question={question} />
			))}
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
		</div>
	);
};

export default Questions;
