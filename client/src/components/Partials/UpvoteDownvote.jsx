import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const UpvoteDownvote = ({
	upvote,
	downvote,
	singleQuestion,
	currentProfile,
}) => {
	return (
		<div className='mx-2 d-flex mt-3 mb-3 w-25 text-light'>
			<button
				className='btn  custom-button'
				onClick={async () =>
					await upvote(
						singleQuestion[0]?.question_id,
						currentProfile[0]?.username
					)
				}
			>
				<AiOutlineArrowUp size={20} />
				<p>{singleQuestion[0]?.upvotes?.length}</p>
			</button>

			<button
				className='btn  custom-button'
				onClick={async () =>
					await downvote(
						singleQuestion[0]?.question_id,
						currentProfile[0]?.username
					)
				}
			>
				<AiOutlineArrowDown size={20} />
				<p>{singleQuestion[0]?.downvotes?.length}</p>
			</button>
		</div>
	);
};

export default UpvoteDownvote;
