import React from 'react';
import Gravatar from 'react-gravatar';
import { useSelector } from 'react-redux';
import QuestionDetailsLogic from './QuestionDetailsLogic';
import './QuestionDetails.css';

const QuestionDetails = () => {
	const {
		singleQuestion,
		onSubmitComment,
		commentToPost,
		onChange,
		commentsData,
		id,
	} = QuestionDetailsLogic();
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
				{commentsData.map((comment) => {
					return (
						<>
							{comment.commentedonquestion === id ? (
								<div className='bg-light p-5 container my-5'>
									<Gravatar
										email={comment.commentedbyemail}
										className='rounded-circle floatleft'
									/>
									<h5 className='pt-2'>{comment.comment}</h5>
									<h6>@{comment.commentedbyuser}</h6>
								</div>
							) : (
								<></>
							)}
						</>
					);
				})}
			</div>
			{isAuth === true ? (
				<>
					<div className='input-group'>
						<input
							className='form-control'
							name='comment'
							type='text'
							placeholder='Write a comment'
							value={commentToPost.comment}
							onChange={(e) => onChange(e)}
						/>
						<span className='input-group-btn'>
							<button
								onClick={onSubmitComment}
								className='btn btn-primary input-group-prepend'
							>
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
