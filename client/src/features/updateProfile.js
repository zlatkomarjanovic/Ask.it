import { createSlice } from '@reduxjs/toolkit';

export const updateProfileSlice = createSlice({
	name: 'updateProfile',
	initialState: { value: {} },
	reducers: {
		updateProfile: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { updateProfile } = updateProfileSlice.actions;

export default updateProfileSlice.reducer;
