import React from 'react';
import PartialsLogic from './PartialsLogic';

const EditQuestionModal = ({ question_id }) => {
	const { onChange, onSubmit, title } = PartialsLogic();

	return (
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
							Edit your question
						</h5>
					</div>
					<div className='modal-body'>
						<form>
							<input
								value={title}
								onChange={(e) => onChange(e)}
								placeholder='Edit question...'
								type='text'
								name='title'
								className='form-control my-3'
							/>

							<button
								type='button'
								className='btn btn-primary btn-block'
								data-dismiss='modal'
								onClick={(e) => onSubmit(e, question_id)}
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

export default EditQuestionModal;
