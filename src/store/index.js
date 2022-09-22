// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit";

// ** Reducers
import country from "./Country";

export const store = configureStore({
  reducer: {
    country,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
