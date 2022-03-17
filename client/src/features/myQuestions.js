import { createSlice } from '@reduxjs/toolkit';

export const myQuestions = createSlice({
	name: 'myQuestions',
	initialState: { value: [] },
	reducers: {
		setMyQuestions: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setMyQuestions } = myQuestions.actions;

export default myQuestions.reducer;
