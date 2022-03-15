import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setCurrentProfile } from '../../features/currentProfile';
import { updateProfile } from '../../features/updateProfile';
import { GetCurrentUser, updateForm } from '../../services/services';

const ProfileLogic = () => {
	const dispatch = useDispatch();

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

	const onSubmitForm = (e, body) => {
		updateForm(e, body);
	};

	//submiting the form

	return { onChange, onSubmitForm, ime, prezime, email, password };
};

export default ProfileLogic;
