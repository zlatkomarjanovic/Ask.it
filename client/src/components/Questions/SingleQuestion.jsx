import React from 'react';
import Gravatar from 'react-gravatar';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import './SingleQuestion.css';
const SingleQuestion = () => {
	return (
		<>
			<div className='container bg-light rounded-box'>
				<table className='row bg-primary p-3 rounded-table'>
					<td className='col-1'>
						<Gravatar
							email='zlajaa2000@gmail.com'
							size={30}
							className='rounded-circle'
						/>
					</td>
					<td className='col'>
						<h5>Posted by "some user"</h5>
					</td>
					<td className='col align-items-end'>
						<button className='btn btn-info right'>Join</button>
					</td>
				</table>

				<div className='p-4'>
					<div>
						<h4>
							Bank of America calls police on "Black Panther" director Ryan
							Coogler after attempting to withdraw 12.000$ from his own bank
							account
						</h4>
					</div>

					<div>
						<div>
							<AiOutlineArrowUp size={25} />
							<AiOutlineArrowDown size={25} />
						</div>
						<h4>Comment 1</h4>
						<h4>Comment 2</h4>
						<div className='input-group'>
							<input
								className='form-control'
								type='text'
								placeholder='Write a comment'
							/>
							<span className='input-group-btn'>
								<buton className='btn btn-primary input-group-prepend'>
									Comment
								</buton>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleQuestion;
