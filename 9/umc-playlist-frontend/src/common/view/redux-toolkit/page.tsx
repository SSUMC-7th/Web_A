import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  incrementAmount,
  decrementAmount,
} from "@/redux/cart_slice";
import type { RootState } from "@/redux/store";
import { ItemCard } from "@/common/component/item_card";

const ReduxToolkitPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h1>음원 장바구니</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            singer={item.singer}
            price={item.price}
            amount={item.amount}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default ReduxToolkitPage;
