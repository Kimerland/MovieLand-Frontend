import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICinema } from "../../components/CinemaContent/CinemaContent";

const initialState: ICinema[] = [];

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<ICinema>) => {
      const movie = action.payload;
      if (!state.some((item) => item.id === movie.id)) {
        state.push(movie);
      }
    },
    removeMovie: (state, action: PayloadAction<string>) => {
      const movieId = action.payload;
      return state.filter((movie) => movie.id !== movieId);
    },
    initialWatch: (state, action: PayloadAction<ICinema[]>) => {
      return Array.isArray(action.payload) ? action.payload : [];
    },
  },
});

export const { addMovie, removeMovie, initialWatch } = favouriteSlice.actions;
export const { actions, reducer } = favouriteSlice;
