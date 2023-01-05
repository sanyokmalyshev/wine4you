import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartReducer';
import favReducer from '../features/favReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch