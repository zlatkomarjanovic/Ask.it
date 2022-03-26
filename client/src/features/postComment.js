import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
	name: 'postComment',
	initialState: { value: { comment: '' } },
	reducers: {
		setPostComment: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setPostComment } = commentSlice.actions;

export default commentSlice.reducer;
