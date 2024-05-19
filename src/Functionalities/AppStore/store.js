import { configureStore } from "@reduxjs/toolkit";
import toggleThemeReducer from "../Features/toggleThemeSlice";
import getAuthdataReducer from "../Features/getAuthdataSlice";
import getUserDataReducer from "../Features/getUserDataSlice";

const store = configureStore({
    reducer: {
        toggleTheme: toggleThemeReducer,
        getAuth: getAuthdataReducer,
        getUser: getUserDataReducer,
    }
})

export default store;