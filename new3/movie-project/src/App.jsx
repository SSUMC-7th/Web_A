import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../src/pages/home.jsx";
import NotFound from "../src/pages/NotFound.jsx";
import Movies from "../src/pages/Movies.jsx";
import RootLayout from "../src/pages/RootLayout.jsx";
import Login from "../src/pages/login.jsx";
import Search from "../src/pages/Search.jsx";
import SignIn from "../src/pages/SignIn.jsx";
import GlobalStyles from "./GlobalStyle.js";
import Category from "./pages/Category.jsx";

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
        path: "movies/:category",
        element: <Movies />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "signin",
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
