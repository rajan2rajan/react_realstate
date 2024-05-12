import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    createUser: null,
    error: null,
    loading: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.createUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { signInStart, signInSucces, signInFail } = userSlice.actions; //

export default userSlice.reducer;
