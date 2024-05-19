import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: {},
};

export const getAuthdataSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getAuth: (state, actions) => {
            console.log(actions.payload);
            state.isLoggedIn = actions.payload.result;
            state.user = actions.payload.user;
        }
    }
})

export const { getAuth } = getAuthdataSlice.actions;
export default getAuthdataSlice.reducer;