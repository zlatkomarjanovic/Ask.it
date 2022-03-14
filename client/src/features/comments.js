import { createSlice } from '@reduxjs/toolkit';

export const comments = createSlice({
	name: 'comments',
	initialState: { value: [] },
	reducers: {
		setComments: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setComments } = comments.actions;

export default comments.reducer;
