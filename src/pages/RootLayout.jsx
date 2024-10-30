import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/SideBar"; // 사이드바 컴포넌트 임포트
import Navbar from "../components/NavBar"; // 네비게이션 바 컴포넌트 임포트

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const OutletLayout = styled.div`
  flex: 1;
  padding: 2rem;
`;

const RootLayout = () => {
  return (
    <>
      <StyledLayout>
        <Navbar />
        <ContentLayout>
          <Sidebar />
          <OutletLayout>
            <Outlet />
          </OutletLayout>
        </ContentLayout>
      </StyledLayout>
    </>
  );
};

export default RootLayout;
