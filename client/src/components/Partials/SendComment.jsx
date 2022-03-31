import React from 'react';

const SendComment = ({ isAuth, commentToPost, onSubmitComment, onChange }) => {
	return (
		<div className='mb-5'>
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
								onClick={(e) => onSubmitComment(e)}
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

export default SendComment;
