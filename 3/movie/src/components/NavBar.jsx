import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #1a1a1a;
  padding: 10px 20px;
  color: #fff;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
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
  flex-direction: row;
  //padding-top: -500px; /* Adjust for fixed navbar */
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #1a1a1a;
  color: white;
  width: 250px;
  height: 100vh;
  position: fixed; /* Fix the sidebar as well */
  top: 60px; /* Adjust for the height of the navbar */
  left: 0;
`;

const MainContent = styled.div`
  display: grid;
  /* flex-wrap: wrap; */
  grid-template-columns: repeat(9, 1fr); /* 한 줄에 9개 요소 */
  //grid-template-columns: repeat(auto-fill, minmax(150px, 3fr));
  gap: 20px;
  padding: 1200px;
  background-color: #000;
  color: white; /* Sidebar와 맞추기 위해 여백 설정 */
  min-height: 100vh; /* 콘텐츠가 화면 전체를 채우도록 */
  width: calc(100% - 250px); /* Sidebar를 제외한 나머지 공간 채우기 */
  box-sizing: border-box;
  margin-top: -1000px;
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
