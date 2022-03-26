import React from 'react';
import Gravatar from 'react-gravatar';

const SingleQuestionPost = ({ singleQuestion }) => {
	return (
		<div className='p-5 shadow glass-container'>
			<Gravatar
				email={singleQuestion[0]?.postedbyemail}
				size={100}
				className='rounded-circle floatleft'
			/>
			<h5>@{singleQuestion[0]?.postedbyusr}</h5>
			<h2>{singleQuestion[0]?.title}?</h2>
		</div>
	);
};

export default SingleQuestionPost;
