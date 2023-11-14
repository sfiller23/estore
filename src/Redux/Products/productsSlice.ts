import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsAction";
import { ProductState } from "../Product/productSlice";

export interface ProductsState {
  products: ProductState[];
  status: string;
  error: string;
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const filterData: ProductState[] = action.payload.products.filter(
        (products: ProductState) => {
          return products.category_id === action.payload.selectedCategory.id;
        }
      );
      state.products = filterData;
    },
    filterByPrice: (state, action) => {
      const filteredData: ProductState[] = action.payload.products.filter(
        (product: ProductState) => {
          return (
            product.price >= action.payload.minPriceLimit &&
            product.price <= action.payload.maxPriceLimit
          );
        }
      );
      state.products = filteredData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(getProducts.fulfilled, (state, action: any) => {
        state.status = "Success";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action: any) => {
        state.status = "Rejected!";
        state.error = action.error.message;
      });
  },
});

export const { filterProducts, filterByPrice } = productsSlice.actions;

export default productsSlice.reducer;
