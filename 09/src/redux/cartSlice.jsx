import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems';

const initialState = {
  cartItems,
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.amount += 1;
      }
    },
    decrease: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        if (item.amount > 1) {
          item.amount -= 1;
        } else {
          state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    calculateTotals: (state) => {
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.amount, 0);
    },
  },
});

export const { increase, decrease, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
