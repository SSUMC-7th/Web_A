import StyledButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1a1a1a;
  padding: 10px 20px;
  color: #fff;
  display: flex;
  justify-content: space-between; /* Distribute items to both ends */
  align-items: center;
`;

const RightNav = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  color: #ea3a66;
  font-weight: bold;
  text-decoration: none;
  font-size: 24px;
`;

function NavBar() {
  const navigate = useNavigate();

  return (
    <NavBarContainer>
      <StyledLink to={"/"}>YONGCHA</StyledLink>
      <RightNav>
        <StyledButton
          text="로그인"
          color="#1b1a1a"
          onClick={() => {
            navigate("/login");
          }}
        />
        <StyledButton
          text="회원가입"
          color="#ea3a66"
          onClick={() => {
            navigate("/signin");
          }}
        />
      </RightNav>
    </NavBarContainer>
  );
}

export default NavBar;
