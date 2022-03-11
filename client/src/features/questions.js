import { createSlice } from '@reduxjs/toolkit';

export const questions = createSlice({
	name: 'questions',
	initialState: { value: [] },
	reducers: {
		setQuestions: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setQuestions } = questions.actions;

export default questions.reducer;
