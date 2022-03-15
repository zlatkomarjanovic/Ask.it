import React from 'react';
import Gravatar from 'react-gravatar';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import './SingleQuestion.css';
import { NavLink } from 'react-router-dom';

const SingleQuestion = ({ question, color }) => {
	const isAuth = useSelector((state) => state.isAuth.value);
	const currentProfile = useSelector((state) => state.currentProfile.value);
	const comments = useSelector((state) => state.comments.value);

	console.log(question);

	return (
		<>
			<div className='card mb-5 roundedcustom shadow'>
				<h5 className={`card-header ${color ? color : 'bg-primary'} p-4`}>
					<Gravatar
						email={question.postedbyemail}
						className='rounded-circle mx-3'
					/>
					Posted by @{question.postedbyusr}{' '}
				</h5>

				<div className='card-body rounded p-4'>
					<h4 className='card-title'>{question.title} ?</h4>
					<div className='mt-3 mb-3'>
						<AiOutlineArrowUp size={25} /> {question.upvotes}
						<AiOutlineArrowDown size={25} /> {question.downvotes}
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
									<button className='btn mx-2 btn-danger custom-width shadow'>
										Delete
									</button>
									<button className='btn mx-2 btn-warning custom-width shadow'>
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
