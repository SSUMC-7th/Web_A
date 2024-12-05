import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/common/state/redux/store";
import { ItemCard } from "@/common/component/item_card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  clearCart,
  decrementAmount,
  incrementAmount,
  removeItem,
} from "@/common/state/redux/cart_slice";
import { openModal, closeModal } from "@/common/state/redux/modal_slice";
import Modal from "@/common/component/modal";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReduxToolkitPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const totalItem = useSelector((state: RootState) => state.cart.totalItems);
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-semibold flex flex-row justify-center items-center gap-[2rem] text-[2rem] py-[2rem]">
        <span>음원 장바구니 : redux-toolkit</span>
        <span>
          <ArrowRight
            className="size-[2rem] cursor-pointer hover:text-gray-600"
            onClick={() => navigate("/zustand")}
          />
        </span>
      </h1>
      <div className="flex flex-col items-start justify-center mb-[1rem]">
        <Badge>장바구니 {totalItem}</Badge>
        <Button
          className="bg-red-500 hover:bg-red-600 my-[1rem]"
          onClick={() => dispatch(openModal())}
        >
          장바구니 비우기
        </Button>
        <p className="font-semibold">총가격 : {totalPrice}</p>
      </div>
      <div className="flex flex-col gap-[1rem] items-center">
        {cartItems.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            singer={item.singer}
            price={item.price}
            amount={item.amount}
            img={item.img}
            onDecrement={() =>
              item.amount > 1
                ? dispatch(decrementAmount(item.id))
                : dispatch(removeItem(item.id))
            }
            onIncrement={() => dispatch(incrementAmount(item.id))}
          />
        ))}
      </div>

      {isOpen && (
        <Modal
          title="장바구니 비우기"
          message="정말로 장바구니를 비우시겠습니까?"
          onConfirm={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
          onCancel={() => dispatch(closeModal())}
        />
      )}
    </>
  );
};

export default ReduxToolkitPage;
