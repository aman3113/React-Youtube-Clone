import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "toggle",
  initialState: {
    isSideBarVisible: false,
    videoList: {},
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarVisible = !state.isSideBarVisible;
    },
    cacheVideoList: (state, action) => {
      state.videoList = action.payload;
    },
  },
});

export const { toggleSideBar, cacheVideoList } = appSlice.actions;
export default appSlice.reducer;
