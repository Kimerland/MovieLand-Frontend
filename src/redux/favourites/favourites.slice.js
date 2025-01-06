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
  },
});

export const { addMovie, removeMovie } = favouriteSlice.actions;
export const { actions, reducer } = favouriteSlice;
