import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ec2List: [],
  loadingList: false,
  error: "",
};

export const getEC2List = createAsyncThunk(
  "list/getList",
  async (_, { rejectWithValue }) => {
    try {
      const listResponse = await axios.get(
        "http://localhost:4000/fakeec2/350"
        // {
        //   token,
        // }
      );
      return { data: listResponse.data };
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response.data);
    }
  }
);

export const ec2ListSlicer = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: {
    [getEC2List.fulfilled]: (state, { payload: { data } }) => {
      state["ec2List"] = data;
      state.loadingList = false;
    },
    [getEC2List.pending]: (state) => {
      state.loadingList = true;
    },
    [getEC2List.rejected]: (state, { payload: { data } }) => {
      state.error = data;
      state.loadingList = false;
    },
  },
});

export default ec2ListSlicer.reducer;
