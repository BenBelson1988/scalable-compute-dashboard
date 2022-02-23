import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: "",
  token: "",
  loadingUser: false,
  error: "",
};

export const getUserFromDB = createAsyncThunk(
  "users/getUser",
  async ({ user, password }, { rejectWithValue }) => {
    try {
      const userRespone = await axios.post("http://localhost:4000/login/user", {
        user,
        password,
      });
      return { data: userRespone.data };
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response.data);
    }
  }
);

export const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserFromDB.fulfilled]: (state, { payload: { data } }) => {
      state.user = data.user;
      state.token = data.token;
      state.loadingUser = false;
    },
    [getUserFromDB.pending]: (state) => {
      state.loadingUser = true;
    },
    [getUserFromDB.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loadingUser = false;
    },
  },
});

export default userSlicer.reducer;
