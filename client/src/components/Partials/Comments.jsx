import React from 'react';

import Comment from '../Comments/Comment';

const Comments = ({ singleComments }) => {
	return (
		<div className='mt-5'>
			<h4>Comments</h4>
			{singleComments.map((comment) => (
				<Comment key={comment.comment_id} comment={comment} />
			))}
		</div>
	);
};

export default Comments;
