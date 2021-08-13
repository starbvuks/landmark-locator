import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "isAuth",
  initialState: {
    value: false,
  },
  reducers: {
    authTrue: (state) => {
      state.value = true;
    },
    authFalse: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {authTrue, authFalse} = authSlice.actions;

export default authSlice.reducer;
