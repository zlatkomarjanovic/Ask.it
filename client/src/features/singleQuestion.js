import { createSlice } from '@reduxjs/toolkit';

export const singleQuestionSlice = createSlice({
	name: 'singleQuestion',
	initialState: { value: {} },
	reducers: {
		setSingleQuestion: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setSingleQuestion } = singleQuestionSlice.actions;

export default singleQuestionSlice.reducer;
