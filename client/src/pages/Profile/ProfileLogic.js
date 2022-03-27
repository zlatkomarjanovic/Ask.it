import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProfile } from '../../features/currentProfile';
import { updateProfile } from '../../features/updateProfile';
import {
	fetchQuestions,
	GetCurrentUser,
	updateForm,
} from '../../services/services';

const ProfileLogic = () => {
	const dispatch = useDispatch();
	const currentProfile = useSelector((state) => state.currentProfile.value);
	const data = useSelector((state) => state.questions.value);
	const newQuestions = data.slice(0, 3);
	const inputs = useSelector((state) => state.currentProfile.value);
	const inputs2 = useSelector((state) => state.updateProfile.value);
	const { user_id } = inputs[0];
	const { ime, prezime, email, password } = inputs2;
	const body = { ime, prezime, email, password, user_id };

	//useEffect
	useEffect(() => {
		setUser();
	}, []);

	//setting the inputs
	const onChange = (e) => {
		dispatch(updateProfile({ ...inputs2, [e.target.name]: e.target.value }));
	};

	async function setUser() {
		const user = await GetCurrentUser();
		dispatch(setCurrentProfile(user));
	}

	const onSubmitForm = async (e, body) => {
		await updateForm(e, body);
		await setUser();
	};

	//submiting the form

	return {
		onChange,
		onSubmitForm,
		ime,
		prezime,
		email,
		password,
		currentProfile,
		data,
		newQuestions,
		body,
	};
};

export default ProfileLogic;
