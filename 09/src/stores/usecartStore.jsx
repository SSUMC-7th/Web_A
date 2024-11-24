import { create } from 'zustand';
import cartItems from '../constants/cartItems';

const useCartStore = create((set, get) => ({
  cartItems: cartItems,
  totalAmount: 0,
  totalQuantity: 0,

  clearCart: () => set({ cartItems: [], totalAmount: 0, totalQuantity: 0 }),

  increase: (id) => {
    set((state) => {
      const updatedItems = state.cartItems.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      return { cartItems: updatedItems };
    });
    get().calculateTotals();
  },

  decrease: (id) => {
    set((state) => {
      const updatedItems = state.cartItems
        .map((item) =>
          item.id === id
            ? { ...item, amount: item.amount - 1 }
            : item
        )
        .filter((item) => item.amount > 0);
      return { cartItems: updatedItems };
    });
    get().calculateTotals();
  },
  
  calculateTotals: () => {
    set((state) => {
      const totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
      const totalQuantity = state.cartItems.reduce((total, item) => total + item.amount, 0);
      return { totalAmount, totalQuantity };
    });
  },
}));

export default useCartStore;
