import { configureStore } from '@reduxjs/toolkit/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tourApi } from './api/TourApi'

export const store = configureStore({
  reducer: {
    [tourApi.reducerPath]: tourApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tourApi.middleware),
})

setupListeners(store.dispatch)