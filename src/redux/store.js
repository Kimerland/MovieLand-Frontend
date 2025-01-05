import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favouritesReducer } from "./favourites/favourites.slice";

const reducers = combineReducers({
  favourites: favouritesReducer,
});

export const store = configureStore({
  reducer: reducers,
});
