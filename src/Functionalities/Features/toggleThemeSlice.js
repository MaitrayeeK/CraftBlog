import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "light-theme",
    value: false,
};

export const toggleThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, actions) => {
            state.theme = actions.payload.target.checked ? "dark-theme" : "light-theme";
            state.value = actions.payload.target.checked;
        }
    }
})

export const { toggleTheme } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;