import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setCurrentProfile } from '../../features/currentProfile';
import { updateProfile } from '../../features/updateProfile';
import { GetCurrentUser } from '../../services/services';

const ProfileLogic = () => {
	const dispatch = useDispatch();

	const inputs = useSelector((state) => state.currentProfile.value);
	const inputs2 = useSelector((state) => state.updateProfile.value);

	const { user_id } = inputs[0];
	const { ime, prezime, email, password } = inputs2;
	console.log(inputs2);

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

	//submiting the form
	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { ime, prezime, email, password, user_id };
			console.log(body);
			const response = await fetch('http://localhost:5000/auth/update-user', {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
			console.log(response);
			const parseRes = await response.json();
			localStorage.setItem('token', parseRes.jwtToken);

			if (parseRes.jwtToken) {
				toast.success('Updated successfully!');
				localStorage.setItem('token', parseRes.jwtToken);
			} else {
				toast.warning(parseRes);
			}
		} catch (error) {
			toast.warning(error.message);
			console.error(error.message);
		}
	};

	return { onChange, onSubmitForm, ime, prezime, email, password };
};

export default ProfileLogic;
