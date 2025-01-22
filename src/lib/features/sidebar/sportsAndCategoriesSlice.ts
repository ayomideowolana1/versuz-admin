import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define the shape of the state
export interface State {
  loading: boolean;
  error: boolean;
  title: string;
  data: any;
}

type Dts = {
  title: string;
  data: string[];
  // {
  //   title: string;
  //   url: string;
  // }[];
};

const initialState: State = {
  loading: true,
  error: false,
  title: "",
  data: [],
};

// Create the slice
export const sportsAndCategoriesSlice = createSlice({
  name: "setSportsAndCategories",
  initialState,
  reducers: {
    // Reducer with a typed payload
    setSportsAndCategories: (state, action) => {
      console.log(action.payload);

      let dataToRender: any = [];
      let sports = Object.keys(action.payload.data.sports);

      sports.forEach((sport) => {
        let categories = action.payload.data.sports[sport];
        let data: any = [];
        categories.forEach((category: any) => {
          let res = {
            title: category.name,
            url: category.id,
          };

          data.push(res);
        });

        let dts: Dts = {
          title: sport,
          data: data,
        };

        dataToRender.push(dts);
      });

      return {
        ...state,
        loading: false,
        title:
          action.payload.type == "event" ? "Sports & Categories" : "Categroies",
        data: dataToRender,
      };
    },
  },
});

// Export actions
export const { setSportsAndCategories } = sportsAndCategoriesSlice.actions;

// Export reducer
export default sportsAndCategoriesSlice.reducer;
