import { createSlice } from '@reduxjs/toolkit';

export const mostActiveUsers = createSlice({
	name: 'mostActiveUsers',
	initialState: { value: [{}] },
	reducers: {
		setMostActiveUsers: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setMostActiveUsers } = mostActiveUsers.actions;

export default mostActiveUsers.reducer;
