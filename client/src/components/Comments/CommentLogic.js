import { useDispatch, useSelector } from 'react-redux';
import { setPostComment } from '../../features/postComment';
import { updateComment } from '../../services/services';

const CommentLogic = () => {
	const dispatch = useDispatch();
	const { comment } = useSelector((state) => state.postComment.value);
	const onChange = (e) => {
		e.preventDefault();
		dispatch(setPostComment({ [e.target.name]: e.target.value }));
		console.log(comment);
	};

	const onSubmit = async (e, comment_id) => {
		e.preventDefault();
		await updateComment(comment_id, comment);
	};
	return {
		onChange,
		onSubmit,
		comment,
	};
};

export default CommentLogic;
