import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const movie = action.payload;
      if (!state.some((item) => item.id === movie.id)) {
        state.push(movie);
      }
    },
    removeMovie: (state, action) => {
      const movieId = action.payload;
      return state.filter((movie) => movie.id !== movieId);
    },
    initialWatch: (state, action) => {
      return Array.isArray(action.payload) ? action.payload : [];
    },
  },
});

export const { addMovie, removeMovie, initialWatch } = favouriteSlice.actions;
export const { actions, reducer } = favouriteSlice;
