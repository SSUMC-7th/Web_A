import { ItemCard } from "@/common/component/item_card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Modal from "@/common/component/modal";
import { useCart } from "@/common/state/zustand/cartState";
import { useModal } from "@/common/state/zustand/modalState";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ZustandPage() {
  const {
    items: cartItems,
    totalPrice,
    totalItems,
    incrementAmount,
    decrementAmount,
    clearCart,
    removeItem,
  } = useCart();

  const { isOpen, openModal, closeModal } = useModal();

  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-semibold flex flex-row justify-center items-center gap-[2rem] text-[2rem] py-[2rem]">
        <span>
          <ArrowLeft
            className="size-[2rem] cursor-pointer hover:text-gray-600"
            onClick={() => navigate("/redux-toolkit")}
          />
        </span>
        <span>음원 장바구니 : zustand</span>
      </h1>
      <div className="flex flex-col items-start justify-center mb-[1rem]">
        <Badge>장바구니 {totalItems}</Badge>
        <Button
          className="bg-red-500 hover:bg-red-600 my-[1rem]"
          onClick={() => openModal()}
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
              item.amount > 1 ? decrementAmount(item.id) : removeItem(item.id)
            }
            onIncrement={() => incrementAmount(item.id)}
          />
        ))}
      </div>

      {isOpen && (
        <Modal
          title="장바구니 비우기"
          message="정말로 장바구니를 비우시겠습니까?"
          onConfirm={() => {
            clearCart();
            closeModal();
          }}
          onCancel={() => closeModal()}
        />
      )}
    </>
  );
}
