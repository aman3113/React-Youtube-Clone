import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: [],
  reducers: {
    addChat: (state, action) => {
      state.splice(10, 1);
      state = state.unshift(action.payload);
    },
  },
});

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
