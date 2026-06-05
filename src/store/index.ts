import { configureStore } from '@reduxjs/toolkit'
import { ebacApi } from './api/ebacApi'
import carrinhoReducer from './slices/carrinhoSlice'
import favoritosReducer from './slices/favoritosSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [ebacApi.reducerPath]: ebacApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ebacApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
