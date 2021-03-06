import { createSlice } from '@reduxjs/toolkit';

export const currentProfile = createSlice({
	name: 'currentProfile',
	initialState: {
		value: [
			{
				user_id: '',
				username: '',
				ime: '',
				prezime: '',
				email: '',
				password: '',
			},
		],
	},
	reducers: {
		setCurrentProfile: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setCurrentProfile } = currentProfile.actions;

export default currentProfile.reducer;
