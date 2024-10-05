import Navbar from "./common/layout/navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import MainPage from "./common/page/main/page";
import LoginPage from "./onboarding/page/login/page";
import RegisterPage from "./onboarding/page/register/register";
import Sidebar from "./common/layout/sidebar";
import { Column, Row } from "./common/style/flex";
import CategoryPage from "./movie/page/category/page";
import NowPlayingPage from "./movie/page/now-playing/page";
import PopularPage from "./movie/page/popular/page";
import TopRatedPage from "./movie/page/top-rated/page";
import UpComingPage from "./movie/page/up-coming/page";
import { Background } from "./common/style/background";
import SearchPage from "./movie/page/search/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/now-playing" element={<NowPlayingPage />} />
        <Route path="/category/popular" element={<PopularPage />} />
        <Route path="/category/top-rated" element={<TopRatedPage />} />
        <Route path="/category/up-coming" element={<UpComingPage />} />
      </Route>
    </Routes>
  );
}

export default App;

function DefaultLayout() {
  return (
    <Column>
      <Navbar />
      <Row>
        <Sidebar />
        <Background>
          <Outlet />
        </Background>
      </Row>
    </Column>
  );
}
