import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    name: null,
    stateChange: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  }
});
