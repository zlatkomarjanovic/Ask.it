import React from 'react';
import Gravatar from 'react-gravatar';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import './SingleQuestion.css';
import { NavLink } from 'react-router-dom';
import { deleteQuestion, downvote, upvote } from '../../services/services';
import SingleQuestionLogic from './SingleQuestionLogic';

const SingleQuestion = ({ question, color, hot }) => {
	const isAuth = useSelector((state) => state.isAuth.value);
	const currentProfile = useSelector((state) => state.currentProfile.value);
	const comments = useSelector((state) => state.comments.value);

	const result = Array.from(comments);
	const filteredComments = result.filter(
		(comment) => comment.commentedonquestion === question.question_id
	);

	const {} = SingleQuestionLogic();
	return (
		<>
			<div className='card mb-5 roundedcustom shadow height card-bg text-light'>
				<h5 className={`card-header bg-card-gradient p-4`}>
					<Gravatar
						email={question.postedbyemail}
						className='rounded-circle mx-3'
					/>
					Posted by @{question.postedbyusr}
					{hot ? <>🔥</> : <></>}
				</h5>

				<div className='card-body rounded p-4'>
					<h4 className='card-title'>{question.title}?</h4>
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

					<div className=''>
						<h4 className='glass-comments'>Comments</h4>

						{filteredComments
							.map((comment) => (
								<div className='border mx-2 w-75 p-2 bg-light rounded-3 mb-3 mw-100 res'>
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
							))
							.slice(0, 2)}
						{filteredComments.length >= 2 ? (
							<p className=' glass-comments'>Join to see more!</p>
						) : (
							<p className=' glass-comments'>Join to leave more comments!</p>
						)}
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
									<button
										className='btn mx-2 btn-danger custom-width'
										onClick={() => deleteQuestion(question.question_id)}
									>
										Delete
									</button>
									<button
										type='button'
										data-toggle='modal'
										data-target='#exampleModalCenter2'
										className='btn mx-2 btn-warning custom-width'
									>
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

			<div
				className='modal fade'
				id='exampleModalCenter2'
				role='dialog'
				aria-labelledby='exampleModalCenterTitle'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLongTitle'>
								Edit the question "{question.title}"
							</h5>
						</div>
						<div className='modal-body'>
							<form>
								<input
									type='text'
									name='question'
									placeholder={question.title}
									className='form-control my-3'
								/>

								<button
									type='button'
									className='btn btn-primary btn-block'
									data-dismiss='modal'
								>
									Save changes
								</button>
							</form>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-dismiss='modal'
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleQuestion;
