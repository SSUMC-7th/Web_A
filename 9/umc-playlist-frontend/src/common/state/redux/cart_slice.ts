import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cartItems from "@/common/const/cart_items";
import { CartState } from "../type/type";

const initialState: CartState = {
  items: cartItems,
  totalPrice: cartItems.reduce(
    (e, item) => e + parseFloat(item.price) * item.amount,
    0
  ),
  totalItems: cartItems.reduce((e, item) => e + item.amount, 0),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action: PayloadAction<string>) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove) {
        state.totalPrice -=
          parseFloat(itemToRemove.price) * itemToRemove.amount;
        state.totalItems -= itemToRemove.amount;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    incrementAmount: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.amount += 1;
        state.totalPrice += parseFloat(item.price);
        state.totalItems += 1;
      }
    },
    decrementAmount: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.amount > 1) {
        item.amount -= 1;
        state.totalPrice -= parseFloat(item.price);
        state.totalItems -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalItems = 0;
    },
  },
});

export const { removeItem, incrementAmount, decrementAmount, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
