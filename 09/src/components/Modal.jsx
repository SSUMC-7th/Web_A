import React from 'react';
import styled from 'styled-components';
import useModalStore from '../stores/useModalStore';
import useCartStore from '../stores/usecartStore';

const Modal = () => {
  const { isOpen, closeModal } = useModalStore();
  const { clearCart } = useCartStore();

  if (!isOpen) return null;

  const handleClearCart = () => {
    clearCart();
    closeModal();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <p>담아두신 모든 음반을 삭제하시겠습니까?</p>
        <ButtonGroup>
          <ConfirmButton onClick={handleClearCart}>네</ConfirmButton>
          <CancelButton onClick={closeModal}>아니요</CancelButton>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

const ConfirmButton = styled.button`
  background-color: #6b46c1;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background-color: #4a3f90;
  }
`;

const CancelButton = styled.button`
  background-color: #e53e3e;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background-color: #c53030;
  }
`;

export default Modal;
