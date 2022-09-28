import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: {
    // pending
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    // successful
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    // failed
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },
    deletePosts: (state, action) => {
      const { id } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        return state.filter((post) => post.id !== id);
      }
    },
  },
});
export const { deletePosts } = postSlice.actions;
export default postSlice.reducer;
