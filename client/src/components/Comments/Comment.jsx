import React from 'react';
import Gravatar from 'react-gravatar';

const Comment = ({ comment }) => {
	return (
		<div key={comment.comment_id} className='w-75 p-5  my-5 glass-container'>
			<Gravatar
				email={comment.commentedbyemail}
				className='rounded-circle floatleft'
			/>
			<h6>@{comment.commentedbyuser}</h6>
			<h5 className='pt-2'>{comment.comment}</h5>
		</div>
	);
};

export default Comment;
