import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavContainer>
      <Logo to="/">YONGCHA</Logo> {/* 로고 클릭 시 '/'로 이동 */}
      <ButtonContainer>
        <StyledLink to="/login">로그인</StyledLink> {/* 로그인 버튼 클릭 시 /login으로 이동 */}
        <StyledLink to="/signup">회원가입</StyledLink> {/* 회원가입 버튼 클릭 시 /signup으로 이동 */}
      </ButtonContainer>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #111;
  color: white;
`;

const Logo = styled(Link)`
  font-size: 24px;
  color: #e63946;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #f1faee;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f1faee;
    color: #111;
  }
`;
