import React from 'react';
import Gravatar from 'react-gravatar';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { downvoteComment, upvoteComment } from '../../services/services';

const Comment = ({ comment }) => {
	const currentProfile = useSelector((state) => state.currentProfile.value);
	console.log(comment);
	return (
		<>
			<div key={comment.comment_id} className='w-75 p-5 my-4 glass-container'>
				<Gravatar
					email={comment.commentedbyemail}
					className='rounded-circle floatleft'
				/>
				<h6>@{comment.commentedbyuser}</h6>
				<h5 className='pt-2'>{comment.comment}</h5>
			</div>

			<div className='mx-2 d-flex w-25 mb-5'>
				<button
					className='custom-button'
					onClick={async () =>
						await upvoteComment(comment.comment_id, currentProfile[0].username)
					}
				>
					<AiOutlineArrowUp size={20} />
					<>{comment.upvotes?.length !== null ? comment.upvotes?.length : 0}</>
				</button>

				<button
					className='custom-button'
					onClick={async () =>
						await downvoteComment(
							comment.comment_id,
							currentProfile[0].username
						)
					}
				>
					<AiOutlineArrowDown size={20} />
					<>
						{comment.downvotes?.length !== null ? comment.downvotes?.length : 0}
					</>
				</button>
			</div>
		</>
	);
};

export default Comment;
