import React from 'react';

const Ask = ({ isAuth, questionToAsk, onChange, askTheQuestion }) => {
	return (
		<div className='m-5'>
			{isAuth === true ? (
				<>
					<div className='input-group'>
						<input
							className='glass-form-control'
							name='title'
							type='text'
							placeholder='Ask... And the community shall answer!'
							value={questionToAsk.title}
							onChange={(e) => onChange(e)}
						/>
						<span className='input-group-btn'>
							<button
								onClick={askTheQuestion}
								className='btn  input-group-prepend glass-button'
							>
								Ask!
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

export default Ask;
