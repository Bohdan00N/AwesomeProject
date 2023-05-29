import { createSlice } from "@reduxjs/toolkit";
import {
  authStateChangeUseThunk,
  logOutThunk,
  loginThunk,
  registerThunk,
} from "./authOperations";

const initialState = {
  name: null,
  email: null,
  userId: null,
  isUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.userId = payload.uid;
        state.email = payload.currentEmail;
        state.name = payload.displayName;
        state.isUser = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.userId = payload.uid;
        state.email = payload.email;
        state.name = payload.name;
        state.isUser = true;
      })
      .addCase(authStateChangeUseThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          state.userId = payload.uid;
          state.name = payload.name;
          state.email = payload.email;
          state.isUser = payload.isUser;
        }
      })
      .addCase(logOutThunk.fulfilled, (state, { payload }) => {
        state.name = null;
        state.userId = null;
        state.isUser = false;
      });
  },
});

export const authReducer = authSlice.reducer;