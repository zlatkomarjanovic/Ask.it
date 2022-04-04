import React from 'react';
import Gravatar from 'react-gravatar';
import {
	AiFillDelete,
	AiFillEdit,
	AiOutlineArrowDown,
	AiOutlineArrowUp,
} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {
	deleteComment,
	downvoteComment,
	upvoteComment,
} from '../../services/services';
import './Comment.css';
import EditCommentModal from './EditCommentModal';

const EditDelete = ({ comment_id }) => {
	return (
		<>
			<button
				type='button'
				className='cstm'
				data-toggle='modal'
				data-target='#EditCommentModal'
			>
				<AiFillEdit className='mx-3' size={15} />
			</button>
			<button
				onClick={async () => await deleteComment(comment_id)}
				type='button'
				className='cstmdngr'
			>
				<AiFillDelete className='mx-3' size={15} />
			</button>
		</>
	);
};

const UpvoteAndDownvote = ({ comment, currentProfile }) => {
	return (
		<>
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

const Comment = ({ comment }) => {
	const currentProfile = useSelector((state) => state.currentProfile.value);

	return (
		<>
			<div key={comment.comment_id} className='w-75 p-5 my-4 glass-container'>
				<Gravatar
					email={comment.commentedbyemail}
					className='rounded-circle floatleft'
				/>
				<h6>@{comment.commentedbyuser}</h6>
				<h5 className='pt-2'>{comment.comment}</h5>
				<EditDelete comment_id={comment.comment_id} />
			</div>
			<UpvoteAndDownvote comment={comment} currentProfile={currentProfile} />
			<EditCommentModal
				comment_id={comment.comment_id}
				comment={comment.comment}
			/>
		</>
	);
};

export default Comment;
