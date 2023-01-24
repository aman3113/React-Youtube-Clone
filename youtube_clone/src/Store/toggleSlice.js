import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isSideBarVisible: false,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarVisible = !state.isSideBarVisible;
    },
  },
});

export const { toggleSideBar } = toggleSlice.actions;
export default toggleSlice.reducer;
