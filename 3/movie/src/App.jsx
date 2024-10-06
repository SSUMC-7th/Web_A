import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Search from "./pages/search";
import NavBar from "./components/NavBar";
//import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        // index: true는 위의 path: '/' 즉, 홈 경로를 의미
        index: true,
        element: <Home />,
      },
      {
        path: "movies", //
        element: <Movies />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
