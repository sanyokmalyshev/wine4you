import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import { CartItem } from 'types/CartItem';

interface cartState {
  products: CartItem[];
}

const initialState: cartState = {
  products: JSON.parse(localStorage.getItem('wines') || '[]'),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<CartItem[]>) => {
      state.products = action.payload;
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
})

export const { actions } = cartSlice;

export const selectCart 
  = (state: RootState) => state.cart.products;
export default cartSlice.reducer