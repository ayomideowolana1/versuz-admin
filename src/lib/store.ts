import { configureStore } from '@reduxjs/toolkit'
import configReducer from "./features/config/configslice";

export const makeStore = () => {
  return configureStore({
    reducer: {
        config:configReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']