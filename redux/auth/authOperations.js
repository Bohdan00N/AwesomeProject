import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/config";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
       const { email, password, name  } = data;
       const result = await createUserWithEmailAndPassword(auth, email, password);
       result &&
          (await updateProfile(auth.currentUser, {
             displayName: name,
          }));
          const { displayName, uid, email:currentEmail } = await auth.currentUser;
            return { displayName, uid, currentEmail };
    } catch (error) {
       console.log('error', error.message);
       return thunkAPI.rejectWithValue(e.message);
    }
 }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log("user", user);
      const loginUser = {
        name: user.displayName,
        uid: user.uid,
        email: user.email,
      };
      return loginUser;
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logOut",
  async (__i, thunkAPI) => {
    try {
      await signOut(auth);
      return;
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  }
);

export const authStateChangeUseThunk = createAsyncThunk(
  "auth/change",
  async (__i, thunkAPI) => {
    try {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          const loginUser = {
            name: user.displayName,
            uid: user.uid,
            email: user.email,
            isUser: true,
          };
          return loginUser;
        } else {
          return;
        }
      });
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  }
);