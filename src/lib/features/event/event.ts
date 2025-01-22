import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ChevronRight, type LucideIcon, Dot } from "lucide-react";



// Define the shape of the state
export interface State {
  loading: boolean;
  error: boolean;
  title: string;
  data: {
    title: string;
    url: string;
    isActive?: boolean;
    // icon: LucideIcon;
    items: {
      title: string;
      url: string;
    }[];
  }[];
}

// Initial state with proper type
const initialState: State = {
  loading: true,
  error: false,
  title: "",
  data: [],
};

// Create the slice
export const eventSlice = createSlice({
  name: "setevent",
  initialState,
  reducers: {
    // Reducer with a typed payload
    setEvent: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        
      };
    },
  },
  
});

// Export actions
export const { setEvent } = eventSlice.actions;

// Export reducer

export default eventSlice.reducer;
