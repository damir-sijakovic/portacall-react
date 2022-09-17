import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "home",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentpage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentpage } = appSlice.actions;
export default appSlice.reducer;
