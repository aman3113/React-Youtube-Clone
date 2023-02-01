import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: [],
  reducers: {
    addChat: (state, action) => {
      state.length > 10 && state.splice(0, 1);
      state = state.push(action.payload);
    },
  },
});

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
