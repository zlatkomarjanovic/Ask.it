import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'isAuth',
	initialState: { value: false },
	reducers: {
		trueFalse: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { trueFalse } = authSlice.actions;

export default authSlice.reducer;
