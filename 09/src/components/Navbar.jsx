import React from 'react';
import styled from 'styled-components';
import useCartStore from '../stores/usecartStore';

const Navbar = () => {
  const { totalQuantity } = useCartStore();

  return (
    <Nav>
      <Logo>UMC PlayList</Logo>
      <CartIconContainer>
        <CartIcon>🛒</CartIcon>
        <Quantity>{totalQuantity}</Quantity>
      </CartIconContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #6b46c1;
  color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const CartIcon = styled.span`
  font-size: 1.5rem;
`;

const Quantity = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #ff6b6b;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  border-radius: 50%;
`;

export default Navbar;
