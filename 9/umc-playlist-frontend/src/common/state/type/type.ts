import { CartItem } from "@/common/const/cart_items";

export interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
}

export interface ModalState {
  isOpen: boolean;
}
