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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
