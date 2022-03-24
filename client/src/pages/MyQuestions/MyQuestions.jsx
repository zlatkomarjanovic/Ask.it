import React from 'react';
import MyQuestionsLogic from './MyQuestionsLogic';
import { SingleQuestion } from '../../components';
import { NavLink } from 'react-router-dom';
import emptyhere from '../../assets/emptyhere.png';

const MyQuestions = () => {
	const { newQuestions, setLoadMore, loadMore } = MyQuestionsLogic();

	return (
		<div className='container text-light'>
			{newQuestions.length > 0 ? (
				<h3 className='m-5'>Some of the questions you recently asked!</h3>
			) : (
				<></>
			)}
			{newQuestions.length > 0 ? (
				<>
					{newQuestions.map((question) => {
						return (
							<SingleQuestion
								key={question.question_id}
								question={question}
								color='bg-primary'
							/>
						);
					})}
				</>
			) : (
				<div className='container mb-5 text-center '>
					<img
						style={{ width: '50%' }}
						alt='Nothing here bro, go out and live a little'
						src={emptyhere}
					/>
					<h1>Well it looks empty in here! Go ask something!</h1>
				</div>
			)}

			{newQuestions.length > 5 ? (
				<button
					onClick={() => setLoadMore(loadMore + 2)}
					className='btn-block text-center text-light glass-button-register'
				>
					Load more
				</button>
			) : (
				<div>
					<h4>Go ask some more!</h4>
					<NavLink
						className='btn-block text-center text-light glass-button-register'
						to='/questions'
					>
						Questions
					</NavLink>
				</div>
			)}
		</div>
	);
};

export default MyQuestions;
