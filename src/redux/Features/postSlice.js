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
  reducers: {
    deletePost: (state, action) => {
      const { id } = action.payload;
      state.posts = state.posts.filter((post) => post.id !== id);
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
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
  },
});
export const { deletePost, addPost } = postSlice.actions;
export default postSlice.reducer;
