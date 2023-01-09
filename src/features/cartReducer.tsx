import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import { CartItem } from 'types/CartItem';
import { Product } from 'types/Product';

interface cartState {
  products: CartItem[];
  deliveryPrice: number,
  discount: number,
  totalPrice: number,
  totalAmount: number,
}

const initialState: cartState = {
  products: JSON.parse(localStorage.getItem('wines') || '[]'),
  deliveryPrice: 50,
  discount: 0,
  totalPrice: 0,
  totalAmount: 0,
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
    addToCart: (state, action: PayloadAction<Product>) => {
      const card = action.payload;

      const newProduct = {
        id: card.id.toString(),
        quantity: 1,
        product: card,
      };
  
      const addedProducts = localStorage.getItem('wines');
  
      if (addedProducts === null 
        || JSON.parse(addedProducts).length === 0) 
      {
        localStorage.setItem('wines', JSON.stringify([newProduct]));
        state.products = [newProduct];
  
        return;
      }
  
      let newProducts = JSON.parse(addedProducts);
  
      const isProductAdded = newProducts
        .some((prod: Product) => +prod.id === card.id);
  
      if (isProductAdded) {
        newProducts = newProducts
          .filter((prod: Product) => +prod.id !== card.id);
      } else {
        newProducts = [...newProducts, newProduct];
      }
  
      if (newProducts.length === 0) {
        localStorage.removeItem('wines');
        state.products = [];
  
        return;
      }
  
      localStorage.setItem('wines',
        JSON.stringify(newProducts));
  
      state.products = newProducts;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const newCartProducts: CartItem[] = [];
    
      state.products.forEach(currentProduct => {
        const copy = { ...currentProduct };
  
        if (currentProduct.id !== productId) {
          newCartProducts.push(copy);
        }
      });
  
      if (newCartProducts.length === 0) {
        localStorage.removeItem('wines');
        state.products = newCartProducts;
      } else {
        localStorage.setItem('wines', JSON.stringify(newCartProducts));
        state.products = newCartProducts;
      }
    },
    handleCount: (state, action: PayloadAction<{productId: string, sign: string}>) => {
      const newCartProducts: CartItem[] = [];
      const {productId, sign} = action.payload;
    
      state.products.forEach(currentProduct => {
        const copy = { ...currentProduct };
  
        if (currentProduct.id === productId) {
          switch (sign) {
            case '+':
              copy.quantity = currentProduct.quantity + 1;
              break;
            case '-':
              copy.quantity = currentProduct.quantity - 1;
              break;
            default:
              break;
          }
        }
  
        newCartProducts.push(copy);
      });
  
      localStorage.setItem('wines', JSON.stringify(newCartProducts));
      state.products = newCartProducts;
    },
    changeDeliveryPrice: (state, action: PayloadAction<number>) => {
      state.deliveryPrice = action.payload;
    },
    changDeiscount: (state, action: PayloadAction<number>) => {
      state.discount = action.payload;
    },
    getTotalPrice: (state) => {
      const result = state.products.reduce((accum, next) => {
        return next.quantity * next.product.price + accum;
      }, 0);

      state.totalPrice = +result.toFixed(2);
    },
    getTotalAmount: (state) => {
      const totalAmount = state.totalPrice + state.deliveryPrice + state.discount;

      state.totalAmount = +totalAmount.toFixed(2);
    }
  },
})

export const { actions } = cartSlice;

export const selectCart 
  = (state: RootState) => state.cart.products;
export default cartSlice.reducer