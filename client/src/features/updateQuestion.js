import { createSlice } from '@reduxjs/toolkit';

export const updateQuestionSlice = createSlice({
	name: 'updateQuestion',
	initialState: { value: { title: '' } },
	reducers: {
		setUpdateQuestion: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setUpdateQuestion } = updateQuestionSlice.actions;

export default updateQuestionSlice.reducer;
