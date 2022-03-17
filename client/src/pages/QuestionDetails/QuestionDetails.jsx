import React from 'react';
import Gravatar from 'react-gravatar';
import { useSelector } from 'react-redux';
import QuestionDetailsLogic from './QuestionDetailsLogic';
import './QuestionDetails.css';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

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
			<div className='border bg-light p-5 shadow'>
				<Gravatar
					email={singleQuestion[0]?.postedbyemail}
					size={100}
					className='rounded-circle floatleft'
				/>
				<h2>{singleQuestion[0]?.title}?</h2>
				<h5>@{singleQuestion[0]?.postedbyusr}</h5>
			</div>
			<div className='mx-2 d-flex mt-3 mb-3  w-25'>
				<button className='btn btn-primary p-1 rounded-3'>
					<AiOutlineArrowUp size={20} />
				</button>
				<p className='mx-1'>{singleQuestion.upvotes}</p>

				<button className='btn btn-danger p-1 rounded-3 text-light'>
					<AiOutlineArrowDown size={20} />
				</button>
				<p className='mx-3'>{singleQuestion.downvotes}</p>
			</div>

			<div className='mt-5'>
				<h4>Comments</h4>
				{commentsData.map((comment) => {
					return (
						<>
							{comment.commentedonquestion === id ? (
								<div className='border w-75 bg-light p-5  my-5'>
									<Gravatar
										email={comment.commentedbyemail}
										className='rounded-circle floatleft'
									/>
									<h5 className='pt-2'>{comment.comment}</h5>
									<h6>@{comment.commentedbyuser}</h6>
								</div>
							) : (
								<> </>
							)}
						</>
					);
				})}
			</div>
			{isAuth === true ? (
				<>
					<div className='input-group w-75'>
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
