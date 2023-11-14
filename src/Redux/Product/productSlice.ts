import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
  id: string;
  category_id: string;
  product_name: string;
  price: number;
  product_img: string;
  quantity: number;
}

const initialState: ProductState[] = [];

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
});

export default productSlice;
