import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the state
export interface ConfigState {
  base_url: "https://competition-manager.versuz.co/api/" | "http://localhost:8080/versuz-erp/api/" ;
  configLoading?: boolean; // Optional property
}

// Initial state with proper type
const initialState: ConfigState = {
  
  base_url: "https://competition-manager.versuz.co/api/" ,
};

// Create the slice
export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    // Reducer with a typed payload
    setConfigLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        configLoading : action.payload
      }
    },
  },
});

// Export actions
export const { setConfigLoading } = configSlice.actions;

// Export reducer

export default configSlice.reducer;
