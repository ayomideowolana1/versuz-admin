import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ChevronRight, type LucideIcon, Dot } from "lucide-react";



// Define the shape of the state
export interface State {
    name:string
    type:string
  };


// Initial state with proper type
const initialState: State = {
  name:'New Event',
  type:'Event'
};

// Create the slice
export const newEvent = createSlice({
  name: "setSportsAndCategories",
  initialState,
  reducers: {
    // Reducer with a typed payload
    setEvent: (state, action: PayloadAction<State>) => {
      return {
        ...state,
        name:action.payload.name
      };
    },
  },
  
});

// Export actions
export const { setEvent } = newEvent.actions;

// Export reducer

export default newEvent.reducer;
