import React from 'react';
import { NavLink } from 'react-router-dom';
import SingleQuestion from '../Questions/SingleQuestion';

const RecentQuestions = ({ newQuestions, currentProfile }) => {
	return (
		<div>
			<h4 className='text-light'>Recent questions</h4>
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
			{newQuestions.length > 3 ? (
				<NavLink
					className='btn btn-block glass-register-button'
					to='/my-questions'
				>
					My Questions
				</NavLink>
			) : (
				<></>
			)}
		</div>
	);
};

export default RecentQuestions;
