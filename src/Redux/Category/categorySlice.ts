import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./action";
import { Category } from "../../interfaces/general";

export interface CategoryState {
  categories: Category[];
  status: string;
  error: string;
}

const initialState: CategoryState = {
  categories: [],
  status: "idle",
  error: "",
};

const categorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(getCategories.fulfilled, (state, action: any) => {
        state.status = "Success";
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action: any) => {
        state.status = "Failed!";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
