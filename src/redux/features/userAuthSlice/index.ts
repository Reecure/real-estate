import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/redux/app/store";

interface State {
    isLogged: boolean
}
const initialState: State = {
	isLogged: false
};

const userAuthSlice = createSlice({
	name: "getProjectById",
	initialState,
	reducers: {
		setLogged: (state, action:PayloadAction<boolean>) => {
			state.isLogged = action.payload;
		},
		logout: state => {
			state.isLogged = false;
		}
	},
});

export default userAuthSlice.reducer;

export const { setLogged, logout } = userAuthSlice.actions;

export const selectAuth = (state: RootState) => state.auth.isLogged;