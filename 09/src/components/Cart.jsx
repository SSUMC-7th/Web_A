import React from 'react';
import styled from 'styled-components';
import useCartStore from '../stores/usecartStore';
import CartItem from './CartItem';
import ClearCartButton from './ClearCartButton';
import Modal from './Modal';

const Cart = () => {
  const { cartItems, totalAmount } = useCartStore();

  if (cartItems.length === 0) {
    return <Container>장바구니가 비어 있습니다.</Container>;
  }

  return (
    <Container>
      <h2>당신이 선택한 음반</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <Footer>
        <h3>총 금액: ₩ {totalAmount.toLocaleString()}</h3>
        <ClearCartButton />
      </Footer>
      <Modal />
    </Container>
  );
};

const Container = styled.section`
  padding: 2rem;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export default Cart;
