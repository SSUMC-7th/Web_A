import React from 'react';
import styled from 'styled-components';
import useModalStore from '../stores/useModalStore';

const ClearCartButton = () => {
  const { openModal } = useModalStore();

  return <Button onClick={openModal}>쇼핑카트 비우기</Button>;
};

const Button = styled.button`
  background-color: #6b46c1;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #4a3f90;
  }
`;

export default ClearCartButton;
