import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import { Product } from 'types/Product';

interface favState {
  products: Product[];
}

const initialState: favState = {
  products: JSON.parse(localStorage.getItem('fav') || '[]'),
}

export const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
})

export const { actions } = favSlice;

export const selectCart 
  = (state: RootState) => state.cart.products;
export default favSlice.reducer