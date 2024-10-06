import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from "styled-components";

const RootLayout = () => {
    return (
        <Container>
            <StyledNavbar />
            <Main>
                <StyledSidebar />
                <Content>
                    <Outlet />
                </Content>
            </Main>
        </Container>
    );
};

export default RootLayout;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

const Main = styled.div`
    display: flex;
    flex-grow: 1;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

const StyledNavbar = styled(Navbar)`
    background-color: #111;
    color: white;
    padding: 10px;
    height: 50px; /* 고정된 높이로 설정 */
    width: 100%;
`;

const StyledSidebar = styled(Sidebar)`
    width: 200px; /* 고정된 사이드바 너비 */
    background-color: #222;
    color: white;
    padding: 20px;
    height: calc(100vh - 50px); /* Navbar를 뺀 높이 */
    position: fixed; /* 사이드바 고정 */
    top: 50px; /* Navbar 바로 아래에 위치 */
    left: 0;
    box-sizing: border-box; /* 패딩을 포함한 박스 크기 계산 */
`;

const Content = styled.div`
    padding: 20px;
    background-color: #141414;
    flex-grow: 1;
    height: calc(100vh - 50px); /* Navbar 높이를 제외한 전체 화면 높이 */
    overflow-y: auto;
    box-sizing: border-box;
`;
