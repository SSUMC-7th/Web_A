import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a; /* Dark background */
  padding: 10px 20px;
  color: #fff; /* Text color */
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #e91e63; /* Pink background for buttons */
  color: white;
  &:hover {
    background-color: #d81b60;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #1a1a1a;
  color: white;
  width: 250px;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background-color: #000;
  color: white;
  flex-grow: 1;
`;

function NavBar() {
  return (
    <>
      <NavBarContainer>
        <LeftNav>
          <StyledLink to={"/"}>YONGCHA</StyledLink>
        </LeftNav>
        <RightNav>
          <StyledLink to={"login"}>Login</StyledLink>
          <StyledLink to={"signup"}>Sign Up</StyledLink>
        </RightNav>
      </NavBarContainer>

      <ContentWrapper>
        <Sidebar>
          <StyledLink to={"search"}>Search</StyledLink>
          <StyledLink to={"movies"}>Movies</StyledLink>
        </Sidebar>

        <MainContent>
          <Outlet />
        </MainContent>
      </ContentWrapper>
    </>
  );
}

export default NavBar;
