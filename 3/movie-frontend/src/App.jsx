import Navbar from "./common/layout/navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import MainPage from "./common/page/main/page";
import LoginPage from "./onboarding/page/login/page";
import RegisterPage from "./onboarding/page/register/register";
import Sidebar from "./common/layout/sidebar";
import SearchPage from "./movie/page/search/page";
import { Column, Row } from "./common/component/flex";
import { Background } from "./common/component/background";
import MoviePage from "./movie/page/movie/page";
import CategoryPage from "./movie/page/movie/category/page";
import DetailPage from "./movie/page/movie/detail/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movie/category/:category" element={<CategoryPage />} />
        <Route path="/movie/detail/:id" element={<DetailPage />} />
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
