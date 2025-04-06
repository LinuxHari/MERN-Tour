import {configureStore} from "@reduxjs/toolkit/react";
import {setupListeners} from "@reduxjs/toolkit/query";
import {baseApi} from "./api/baseApi";
import currencySlice from "./slices/currencySlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    currency: currencySlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
