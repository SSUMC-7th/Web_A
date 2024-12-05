import { create } from "zustand";
import { CartState } from "../type/type";
import cartItems from "@/common/const/cart_items";

interface CartZustand extends CartState {
  incrementAmount: (id: string) => void;
  decrementAmount: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCart = create<CartZustand>((set) => ({
  items: cartItems,
  totalPrice: cartItems.reduce(
    (e, item) => e + parseFloat(item.price) * item.amount,
    0
  ),
  totalItems: cartItems.reduce((e, item) => e + item.amount, 0),

  incrementAmount: (id: string) =>
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );

      return {
        items: updatedItems,
        totalPrice: updatedItems.reduce(
          (e, item) => e + parseFloat(item.price) * item.amount,
          0
        ),
        totalItems: updatedItems.reduce((e, item) => e + item.amount, 0),
      };
    }),

  decrementAmount: (id: string) =>
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.id === id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      );

      return {
        items: updatedItems,
        totalPrice: updatedItems.reduce(
          (e, item) => e + parseFloat(item.price) * item.amount,
          0
        ),
        totalItems: updatedItems.reduce((e, item) => e + item.amount, 0),
      };
    }),

  removeItem: (id: string) =>
    set((state) => {
      const updatedItems = state.items.filter((item) => item.id !== id);

      return {
        items: updatedItems,
        totalPrice: updatedItems.reduce(
          (e, item) => e + parseFloat(item.price) * item.amount,
          0
        ),
        totalItems: updatedItems.reduce((e, item) => e + item.amount, 0),
      };
    }),

  clearCart: () =>
    set(() => ({
      items: [],
      totalPrice: 0,
      totalItems: 0,
    })),
}));
