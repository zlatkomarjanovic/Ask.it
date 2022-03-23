import React from 'react';
import { SingleQuestion } from '../../components';
import QuestionsLogic from './QuestionsLogic';

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
			<h3 className='mb-5'>Questions</h3>
			<div className='m-5'>
				{isAuth === true ? (
					<>
						<div className='input-group'>
							<input
								className='form-control'
								name='title'
								type='text'
								placeholder='Ask... And the community shall answer!'
								value={questionToAsk.title}
								onChange={(e) => onChange(e)}
							/>
							<span className='input-group-btn'>
								<button
									onClick={askTheQuestion}
									className='btn btn-primary input-group-prepend'
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
					className='btn btn-block btn-primary'
				>
					Load more
				</button>
			) : (
				<div>
					<h4>You have the honor to ask the first questions!</h4>
				</div>
			)}
		</div>
	);
};

export default Questions;
