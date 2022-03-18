import React from 'react';
import Gravatar from 'react-gravatar';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import './SingleQuestion.css';
import { NavLink } from 'react-router-dom';
import { downvote, upvote } from '../../services/services';

const SingleQuestion = ({ question, color, hot }) => {
	const isAuth = useSelector((state) => state.isAuth.value);
	const currentProfile = useSelector((state) => state.currentProfile.value);
	const comments = useSelector((state) => state.comments.value);

	return (
		<>
			<div className='card mb-5 roundedcustom shadow'>
				<h5 className={`card-header ${color ? color : 'bg-primary'} p-4`}>
					<Gravatar
						email={question.postedbyemail}
						className='rounded-circle mx-3'
					/>
					Posted by @{question.postedbyusr}
					{hot ? <>🔥</> : <></>}
				</h5>

				<div className='card-body rounded p-4'>
					<h3 className='card-title'>{question.title} ?</h3>
					{isAuth ? (
						<div className='mx-2 d-flex mt-3 mb-3  w-25'>
							<button
								className='btn btn-primary custom-button'
								onClick={async () => await upvote(question.question_id)}
							>
								<AiOutlineArrowUp size={20} />
								<p>{question.upvotes}</p>
							</button>

							<button
								className='btn btn-danger custom-button'
								onClick={async () => await downvote(question.question_id)}
							>
								<AiOutlineArrowDown size={20} />
								<p>{question.downvotes}</p>
							</button>
						</div>
					) : (
						<></>
					)}

					<div>
						<h4 className='mx-2 bg-primary rounded-3 p-2'>Comments</h4>

						{comments.map((comment) => (
							<div key={comment.comment_id}>
								{comment.commentedonquestion === question.question_id ? (
									<div className='border mx-2 w-75 p-2 bg-light rounded-3 mb-3 mw-100'>
										<div className='d-flex'>
											<Gravatar
												size={40}
												email={comment.commentedbyemail}
												className='rounded-circle float-left m-4'
											/>
											<h5 className='mt-5'>
												@{comment.commentedbyuser} asnwers:
											</h5>
										</div>
										<p key={comment.comment_id} className='mx-4 pt-3'>
											{comment.comment}
										</p>
									</div>
								) : (
									<></>
								)}
							</div>
						))}
					</div>

					{isAuth ? (
						<>
							<NavLink
								className='btn btn-info custom-width mx-2'
								to={`/questions/${question.question_id}`}
							>
								Join
							</NavLink>
							{question.postedbyusr === currentProfile[0].username ? (
								<>
									<button className='btn mx-2 btn-danger custom-width'>
										Delete
									</button>
									<button className='btn mx-2 btn-warning custom-width'>
										Edit
									</button>
								</>
							) : (
								<></>
							)}
						</>
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	);
};

export default SingleQuestion;
