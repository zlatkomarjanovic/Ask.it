import { useSelector } from 'react-redux';

const SingleQuestionLogic = () => {
	const isAuth = useSelector((state) => state.isAuth.value);
	const currentProfile = useSelector((state) => state.currentProfile.value);
	const comments = useSelector((state) => state.comments.value);
	const result = Array.from(comments);
	return { isAuth, currentProfile, comments, result };
};

export default SingleQuestionLogic;
