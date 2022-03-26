import React from 'react';
import QuestionDetailsLogic from './QuestionDetailsLogic';
import './QuestionDetails.css';
import { downvote, upvote } from '../../services/services';
import {
	Comments,
	SendComment,
	SingleQuestionPost,
	UpvoteDownvote,
} from '../../components';

const QuestionDetails = () => {
	const {
		singleQuestion,
		singleComments,
		onSubmitComment,
		commentToPost,
		onChange,
		currentProfile,
		isAuth,
	} = QuestionDetailsLogic();

	return (
		<div className='container mt-5 text-light'>
			<SingleQuestionPost singleQuestion={singleQuestion} />
			<UpvoteDownvote
				upvote={upvote}
				downvote={downvote}
				currentProfile={currentProfile}
				singleQuestion={singleQuestion}
			/>

			<Comments singleComments={singleComments} />
			<SendComment
				isAuth={isAuth}
				commentToPost={commentToPost}
				onSubmitComment={onSubmitComment}
				onChange={onChange}
			/>
		</div>
	);
};

export default QuestionDetails;
