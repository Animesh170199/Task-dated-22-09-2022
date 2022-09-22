// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const appCountrySlice = createSlice({
  name: "appCountry",
  initialState: {
    country: "",
  },
  reducers: {
    selectCountry: (state, action) => {
      state.country = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { selectCountry } = appCountrySlice.actions;

export default appCountrySlice.reducer;
