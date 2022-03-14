import React from 'react';
import Gravatar from 'react-gravatar';
import { useSelector } from 'react-redux';
import QuestionDetailsLogic from './QuestionDetailsLogic';
import './QuestionDetails.css';

const fakeComments = [
	{
		commentId: '1',
		commentedOnPost: 'uuidofthepost',
		comment: 'Lorem ipsum dolor sit amet.',
		commentedBy: '@goldenko',
		commentedByEmail: 'zlatkomarjanovic.zm@gmail.com',
	},
	{
		commentId: '2',
		commentedOnPost: 'uuidofthepost',
		comment: 'Lorem ipsum dolor sit amet.',
		commentedByEmail: 'zlajaa2000@gmail.com',
	},

	{
		commentId: '3',
		commentedOnPost: 'uuidofthepost',
		comment: 'Lorem ipsum dolor sit amet.',
		commentedByEmail: '123@gmail.com',
	},
	{
		commentId: '4',
		commentedOnPost: 'uuidofthepost',
		comment: 'Lorem ipsum dolor sit amet.',
		commentedByEmail: 'allahisgreat@gmail.com',
	},
];

const QuestionDetails = () => {
	const { singleQuestion } = QuestionDetailsLogic();
	const isAuth = useSelector((state) => state.isAuth.value);
	return (
		<div className='container mt-5'>
			<div className='bg-light p-5 shadow'>
				<Gravatar
					email={singleQuestion[0]?.postedbyemail}
					size={100}
					className='rounded-circle floatleft'
				/>
				<h2>{singleQuestion[0]?.title}?</h2>
				<h5>@{singleQuestion[0]?.postedbyusr}</h5>
			</div>

			<div className='mt-5'>
				<h4>Comments</h4>
				{fakeComments.map((comment) => (
					<div className='bg-light p-5 container my-5'>
						<Gravatar
							email={comment.commentedByEmail}
							className='rounded-circle floatleft'
						/>
						<h5 className='pt-3'>{comment.comment}</h5>
					</div>
				))}
			</div>
			{isAuth === true ? (
				<>
					<div className='input-group'>
						<input
							className='form-control'
							type='text'
							placeholder='Write a comment'
						/>
						<span className='input-group-btn'>
							<button className='btn btn-primary input-group-prepend'>
								Comment
							</button>
						</span>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default QuestionDetails;
