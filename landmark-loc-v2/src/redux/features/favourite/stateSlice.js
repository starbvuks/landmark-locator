import {createSlice} from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "state",
  initialState: {
    value: false,
  },
  reducers: {
    favTrue: (state, action) => {
      state.value = true;
    },
    favFalse: (state, action) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {favTrue, favFalse} = favSlice.actions;

export default favSlice.reducer;
