import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryState } from "./categorySlice";

// export const getCategories = createAsyncThunk("getCategories", () => {
//   const categories = [];
//   return categories;
// });

export const getCategories = createAsyncThunk<CategoryState[]>(
  "categories/getCategories",
  // Declare the type your function argument here:
  async () => {
    const response = await fetch(
      "http://localhost:5001/productCategories"
    ).then((res) => res.json());
    // Inferred return type: Promise<MyData>

    return response;
  }
);
