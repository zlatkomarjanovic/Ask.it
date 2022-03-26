import { createSlice } from '@reduxjs/toolkit';

export const singleQuestionSlice = createSlice({
	name: 'singleQuestion',
	initialState: {
		value: [
			{
				question_id: '',
				postedby: '',
				postedbyusr: '',
				postedbyemail: '',
				title: '',
				commentcounter: '',
				upvotes: [],
				downvotes: [],
			},
		],
	},
	reducers: {
		setSingleQuestion: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setSingleQuestion } = singleQuestionSlice.actions;

export default singleQuestionSlice.reducer;
