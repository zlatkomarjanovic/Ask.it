import React from 'react';
import MyQuestionsLogic from './MyQuestionsLogic';
import { SingleQuestion } from '../../components';
import { NavLink } from 'react-router-dom';

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
						style={{ width: '100%' }}
						alt='Nothing here bro, go out and live a little'
						src='https://thelocalswpg.com/images/empty_item.svg'
					/>
					<h1>Well it looks empty in here! Go ask something!</h1>
				</div>
			)}

			{newQuestions.length > 5 ? (
				<button
					onClick={() => setLoadMore(loadMore + 2)}
					className='btn btn-block btn-primary p-3'
				>
					Load more
				</button>
			) : (
				<>
					<h4>Go ask some more!</h4>
					<NavLink className='btn btn-block btn-primary p-2' to='/questions'>
						Questions
					</NavLink>
				</>
			)}
		</div>
	);
};

export default MyQuestions;
