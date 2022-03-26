import React from 'react';
import Gravatar from 'react-gravatar';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import './SingleQuestion.css';
import { NavLink } from 'react-router-dom';
import { deleteQuestion, downvote, upvote } from '../../services/services';
import SingleQuestionLogic from './SingleQuestionLogic';

const SingleQuestion = ({ question, hot }) => {
	const { isAuth, currentProfile, result } = SingleQuestionLogic();

	const filteredComments = result.filter(
		(comment) => comment.commentedonquestion === question.question_id
	);

	return (
		<>
			<div className='card mb-5 roundedcustom shadow height card-bg text-light'>
				<h5 className={`card-header bg-card-gradient p-4`}>
					<Gravatar
						email={question.postedbyemail}
						className='rounded-circle mx-3'
					/>
					@{question.postedbyusr}
					{hot ? <>🔥</> : <></>}
				</h5>

				<div className='card-body rounded p-4'>
					<h4 className='card-title'>{question.title}?</h4>
					{isAuth ? (
						<div className='mx-2 d-flex mt-3 mb-3  w-25'>
							<button
								className='custom-button'
								onClick={async () =>
									await upvote(question.question_id, currentProfile[0].username)
								}
							>
								<AiOutlineArrowUp size={20} />
								<p>
									{question.upvotes?.length !== null
										? question.upvotes?.length
										: 0}
								</p>
							</button>

							<button
								className='custom-button'
								onClick={async () =>
									await downvote(
										question.question_id,
										currentProfile[0].username
									)
								}
							>
								<AiOutlineArrowDown size={20} />
								<p>
									{question.downvotes?.length !== null
										? question.downvotes?.length
										: 0}
								</p>
							</button>
						</div>
					) : (
						<></>
					)}

					<div className=''>
						<h4 className='glass-comments'>Comments</h4>

						{filteredComments
							.map((comment) => (
								<div className='glass-comment'>
									<div className='d-flex'>
										<Gravatar
											size={40}
											email={comment.commentedbyemail}
											className='rounded-circle float-left m-2'
										/>
										<h5 className='mt-4 mx-2'>@{comment.commentedbyuser}</h5>
									</div>
									<hr />
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
						<p className='mx-2'>
							Upvoted by:{' '}
							{question.upvotes
								?.map((upvote) => <p className='d-inline'>{upvote}, </p>)
								.slice(0, 3)}
							... and others
						</p>
					</div>

					{isAuth ? (
						<>
							<NavLink
								className='glass-button'
								to={`/questions/${question.question_id}`}
							>
								Join
							</NavLink>
							{question.postedbyusr === currentProfile[0].username ? (
								<>
									<button
										className='glass-button-danger'
										onClick={() => deleteQuestion(question.question_id)}
									>
										Delete
									</button>
									<button className='glass-button'>Edit</button>
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
