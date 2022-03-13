import React from 'react';
import { SingleQuestion } from '../../components';
import QuestionsLogic from './QuestionsLogic';
import { useSelector } from 'react-redux';

const Questions = () => {
	const { fetchQuestions, ask, onChange, questionToAsk } = QuestionsLogic();
	const data = useSelector((state) => state.questions.value);
	const isAuth = useSelector((state) => state.isAuth.value);

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
									onClick={ask}
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

			{data.map((question) => (
				<SingleQuestion key={question.id} question={question} />
			))}
		</div>
	);
};

export default Questions;
