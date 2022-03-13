import React from 'react';
import Gravatar from 'react-gravatar';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import './SingleQuestion.css';

const SingleQuestion = ({ question }) => {
	const isAuth = useSelector((state) => state.isAuth.value);
	return (
		<>
			<div className='container bg-light rounded-box shadow'>
				<table className='row bg-primary p-3 rounded-table'>
					<td className='col-1'>
						<Gravatar
							email={question.postedby}
							size={30}
							className='rounded-circle'
						/>
					</td>
					<td className='col'>
						<h5>Posted by {question.postedby}</h5>
					</td>
					<td className='col align-items-end'>
						{isAuth ? (
							<button className='btn btn-info right'>Join</button>
						) : (
							<></>
						)}
					</td>
				</table>

				<div className='p-4'>
					<div>
						<h4>{question.title}</h4>
					</div>

					<div>
						<div>
							<AiOutlineArrowUp size={25} /> {question.upvotes}
							<AiOutlineArrowDown size={25} /> {question.downvotes}
						</div>
						<h4>Comment 1</h4>
						<h4>Comment 2</h4>
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
				</div>
			</div>
		</>
	);
};

export default SingleQuestion;
