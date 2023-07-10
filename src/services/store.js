import { configureStore } from "@reduxjs/toolkit";

import { atricleApi } from "./article";

export const store = configureStore({
  reducer: {
    [atricleApi.reducerPath]: atricleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(atricleApi.middleware),
});
