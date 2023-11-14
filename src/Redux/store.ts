import { Reducer, configureStore } from "@reduxjs/toolkit";
import categorySlice from "./Category/categorySlice";
import productsSlice from "./Products/productsSlice";
import cartSlice from "./Cart/cartSlice";

export const store = configureStore({
  reducer: {
    categoryReducer: categorySlice,
    pr: productsSlice,
    cr: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
