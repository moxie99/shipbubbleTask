import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  extraReducers: {
    // pending
    [getUsers.pending]: (state, action) => {
      state.loading = true;
    },
    // successful
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    // failed
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
