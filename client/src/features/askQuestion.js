import { createSlice } from '@reduxjs/toolkit';

export const askQuestionSlice = createSlice({
	name: 'askQuestion',
	initialState: { value: { title: '' } },
	reducers: {
		setAskQuestion: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setAskQuestion } = askQuestionSlice.actions;

export default askQuestionSlice.reducer;
