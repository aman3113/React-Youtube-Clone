import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./AppSlice";
import chatReducer from "./ChatSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    chat: chatReducer,
  },
});

export default store;
