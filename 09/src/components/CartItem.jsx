import React from 'react';
import styled from 'styled-components';
import useCartStore from '../stores/usecartStore';

const CartItem = ({ id, img, title, singer, price, amount }) => {
  const { increase, decrease } = useCartStore();

  return (
    <Item>
      <AlbumImage src={img} alt={title} />
      <Details>
        <Title>{title}</Title>
        <Singer>{singer}</Singer>
        <Price>₩ {price.toLocaleString()}</Price>
      </Details>
      <QuantityContainer>
        <QuantityButton onClick={() => increase(id)}>+</QuantityButton>
        <Quantity>{amount}</Quantity>
        <QuantityButton onClick={() => decrease(id)}>-</QuantityButton>
      </QuantityContainer>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
`;

const AlbumImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

const Details = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: bold;
`;

const Singer = styled.h5`
  font-size: 20px;
  color: #666;
`;

const Price = styled.p`
  font-size: 14px;
  margin-top: 0.5rem;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  background-color: #6b46c1;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4a3f90;
  }
`;

const Quantity = styled.p`
  margin: 0 1rem;
  font-size: 1rem;
`;

export default CartItem;
