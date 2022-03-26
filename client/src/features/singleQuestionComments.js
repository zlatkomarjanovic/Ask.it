import { createSlice } from '@reduxjs/toolkit';

export const singleQuestionComments = createSlice({
	name: 'singleQuestionComments',
	initialState: {
		value: [
			{
				comment_id: '',
				commentedonquestion: '',
				comment: '',
				commentedby: '',
				commentedbyuser: '',
				commentedbyemail: '',
				upvotes: [],
				downvotes: [],
			},
		],
	},
	reducers: {
		setSingleQuestionComments: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setSingleQuestionComments } = singleQuestionComments.actions;

export default singleQuestionComments.reducer;
