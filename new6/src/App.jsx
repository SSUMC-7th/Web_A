import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../src/pages/home.jsx";
import NotFound from "../src/pages/NotFound.jsx";
import Movies from "../src/pages/Movies.jsx";
import RootLayout from "../src/pages/RootLayout.jsx";
import Login from "./pages/Login/login.jsx";
import Search from "./pages/Search/search.jsx";
import SignIn from "../src/pages/SignIn.jsx";
import GlobalStyles from "./GlobalStyle.js";
import Category from "./pages/Category.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movie/:category",
        element: <Movies />,
      },
      {
        path: "movies/:movieId",
        element: <MovieDetail />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "/auth/register",
        element: <SignIn />,
      },
      {
        path: "category",
        element: <Category />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
