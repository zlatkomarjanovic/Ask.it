import React from 'react';
import Gravatar from 'react-gravatar';
import { useSelector } from 'react-redux';
import QuestionDetailsLogic from './QuestionDetailsLogic';
import './QuestionDetails.css';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { downvote, upvote } from '../../services/services';

const QuestionDetails = () => {
	const {
		singleQuestion,
		singleComments,
		onSubmitComment,
		commentToPost,
		onChange,
		commentsData,
		id,
	} = QuestionDetailsLogic();
	const isAuth = useSelector((state) => state.isAuth.value);
	return (
		<div className='container mt-5 text-light'>
			<div className='p-5 shadow glass-container'>
				<Gravatar
					email={singleQuestion[0]?.postedbyemail}
					size={100}
					className='rounded-circle floatleft'
				/>
				<h5>@{singleQuestion[0]?.postedbyusr}</h5>
				<h2>{singleQuestion[0]?.title}?</h2>
			</div>
			<div className='mx-2 d-flex mt-3 mb-3 w-25'>
				<button
					className='btn btn-primary custom-button'
					onClick={async () => await upvote(singleQuestion[0]?.question_id)}
				>
					<AiOutlineArrowUp size={20} />
					<p>{singleQuestion[0]?.upvotes}</p>
				</button>

				<button
					className='btn btn-danger custom-button'
					onClick={async () => await downvote(singleQuestion[0]?.question_id)}
				>
					<AiOutlineArrowDown size={20} />
					<p>{singleQuestion[0]?.downvotes}</p>
				</button>
			</div>

			<div className='mt-5'>
				<h4>Comments</h4>
				{singleComments.map((comment) => (
					<div className='w-75 p-5  my-5 glass-container'>
						<Gravatar
							email={comment.commentedbyemail}
							className='rounded-circle floatleft'
						/>
						<h6>@{comment.commentedbyuser}</h6>
						<h5 className='pt-2'>{comment.comment}</h5>
					</div>
				))}
			</div>
			{isAuth === true ? (
				<>
					<div className='input-group w-75'>
						<input
							className='glass-register-form-control'
							name='comment'
							type='text'
							placeholder='Write a comment'
							value={commentToPost.comment}
							onChange={(e) => onChange(e)}
						/>
						<span className='input-group-btn'>
							<button
								onClick={onSubmitComment}
								className='btn  input-group-prepend glass-button'
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
