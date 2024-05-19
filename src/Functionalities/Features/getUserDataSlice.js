import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: {},
   doc: {},
   blogs: [],
   genblogs: [],
};

export const getUserDataSlice = createSlice({
    name: 'getuserdata',
    initialState,
    reducers: {
        getUser: (state, actions) => {
            console.log(actions.payload);
            state.user = actions.payload.user;
            state.doc = actions.payload.doc;
            state.blogs = actions.payload.blogs;
            state.genblogs = actions.payload.genblogs;
        }
    }
})

export const { getUser } = getUserDataSlice.actions;
export default getUserDataSlice.reducer;