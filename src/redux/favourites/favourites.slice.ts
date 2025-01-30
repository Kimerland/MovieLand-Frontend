import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieType {
  id: number;
  title: string;
  rating: number;
}

const initialState: MovieType[] = [];

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<MovieType>) => {
      const movie = action.payload;
      if (!state.some((item) => item.id === movie.id)) {
        state.push(movie);
      }
    },
    removeMovie: (state, action: PayloadAction<number>) => {
      const movieId = action.payload;
      return state.filter((movie) => movie.id !== movieId);
    },
    initialWatch: (state, action: PayloadAction<MovieType[]>) => {
      return Array.isArray(action.payload) ? action.payload : [];
    },
  },
});

export const { addMovie, removeMovie, initialWatch } = favouriteSlice.actions;
export const { actions, reducer } = favouriteSlice;
