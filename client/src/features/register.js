import { createSlice } from '@reduxjs/toolkit';

export const registerSlice = createSlice({
	name: 'register',
	initialState: {
		value: { ime: '', prezime: '', username: '', email: '', password: '' },
	},
	reducers: {
		register: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { register } = registerSlice.actions;

export default registerSlice.reducer;
