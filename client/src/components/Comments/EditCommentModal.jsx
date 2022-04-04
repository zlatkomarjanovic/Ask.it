import React from 'react';
import { useSelector } from 'react-redux';
import CommentLogic from './CommentLogic';

const EditCommentModal = ({ comment_id }) => {
	const { onChange, onSubmit, comment } = CommentLogic();

	return (
		<div
			className='modal fade'
			id='EditCommentModal'
			role='dialog'
			aria-labelledby='exampleModalCenterTitle'
			aria-hidden='true'
		>
			<div className='modal-dialog modal-dialog-centered' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5
							className='modal-title text-secondary'
							id='exampleModalLongTitle'
						>
							Edit your comment
						</h5>
					</div>
					<div className='modal-body'>
						<form>
							<input
								value={comment}
								onChange={(e) => onChange(e)}
								placeholder='Edit your comment...'
								type='text'
								name='comment'
								className='form-control my-3'
							/>

							<button
								type='button'
								className='btn btn-primary btn-block'
								data-dismiss='modal'
								onClick={(e) => onSubmit(e, comment_id)}
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
	);
};

export default EditCommentModal;
