import { createSlice } from "@reduxjs/toolkit";

export interface AccordionCatState {
  category: string;
  items: string[];
}

const initialState: AccordionCatState[] = [];

const accordionCatSlice = createSlice({
  name: "AccordionCat",
  initialState,
  reducers: {},
});

export default accordionCatSlice;
