import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Import reducer chính của bạn

const store = configureStore({
   reducer: rootReducer,
});

export default store;
