import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setSingleQuestion } from '../../features/singleQuestion';
import {
	fetchQuestion,
	getAllComments,
	GetTheComments,
	sendComment,
	updateCommentCounter,
	updateCommentCounterQuestions,
} from '../../services/services';
import { setPostComment } from '../../features/postComment';
import { setSingleQuestionComments } from '../../features/singleQuestionComments';
import { setComments } from '../../features/comments';

const QuestionDetailsLogic = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const currentProfile = useSelector((state) => state.currentProfile.value);
	const singleQuestion = useSelector((state) => state.singleQuestion.value);
	const commentToPost = useSelector((state) => state.postComment.value);
	const commentsData = useSelector((state) => state.comments.value);
	const singleComments = useSelector(
		(state) => state.singleQuestionComments.value
	);
	const comment = commentToPost.comment;
	const commentedonquestion = id;
	const { username, user_id, email } = currentProfile[0];
	const commentedby = user_id;
	const commentedbyuser = username;
	const commentedbyemail = email;

	const body = {
		commentedonquestion,
		comment,
		commentedby,
		commentedbyuser,
		commentedbyemail,
	};

	async function getQuestion() {
		try {
			const res = await fetchQuestion(id);
			dispatch(setSingleQuestion(res));
		} catch (error) {
			console.error(error.message);
		}
	}

	async function getComments() {
		try {
			const res = await getAllComments();

			dispatch(setComments(res));
		} catch (error) {
			console.error(error.message);
		}
	}

	const onChange = (e) => {
		e.preventDefault();
		dispatch(
			setPostComment({ ...commentToPost, [e.target.name]: e.target.value })
		);
	};

	async function onSubmitComment(e) {
		await sendComment(e, body);
		await updateCommentCounter(currentProfile[0].user_id);
		await updateCommentCounterQuestions(singleQuestion[0].question_id);
		await getComments();
	}

	const setTheseComments = async () => {
		const dizComments = await GetTheComments(id);
		dispatch(setSingleQuestionComments(dizComments));
	};
	useEffect(() => {
		getQuestion();
		getComments();
		setTheseComments();
	}, []);

	return {
		singleQuestion,
		singleComments,
		onSubmitComment,
		commentToPost,
		onChange,
		commentsData,
		id,
	};
};

export default QuestionDetailsLogic;
