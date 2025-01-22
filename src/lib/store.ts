import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./features/config/configslice";
import sportsAndCategoriesReducer from "./features/sidebar/sportsAndCategoriesSlice";
import newEventReducer from "./features/event/newEvent";

export const makeStore = () => {
  return configureStore({
    reducer: {
      config: configReducer,
      sportsAndCategories: sportsAndCategoriesReducer,
      newEvent:newEventReducer
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
