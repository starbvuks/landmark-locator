import {createSlice} from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "state",
  initialState: {
    value: "",
  },
  reducers: {
    curState: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {authTrue, authFalse} = authSlice.actions;

export default authSlice.reducer;
