import styled from "styled-components";
import { useSelector } from "react-redux";
import { CartIcon } from "../constants/icon";

const Header = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <HeaderContainer>
      <Title>숨니의 PLAYLIST</Title>
      <CartIcon />
      <Container>
        <AmountContainer>
          <h4>{amount}</h4>
        </AmountContainer>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160px;
  background-color: #f9d49b;
  justify-content: space-between;
  padding: 20px;
  gap: 10px;
  position: relative;

  border-radius: 0 0 20px 20px;
  box-shadow: 0 4px 15px rgba(79, 35, 4, 0.1);

  background: linear-gradient(
    to bottom,
    #f9d49b 0%,
    #f9d49b 85%,
    rgba(249, 212, 155, 0.95) 100%
  );
`;

export const Title = styled.span`
  font-size: 32px;
  font-weight: 400;
  line-height: 37.28px;
  text-align: left;
  color: #4f2304;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
