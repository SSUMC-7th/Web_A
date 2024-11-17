import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyles from "./GlobalStyle.js";
import Home from "../src/pages/home.jsx";
import NotFound from "../src/pages/NotFound.jsx";
import RootLayout from "../src/pages/RootLayout.jsx";
import Login from "./pages/Login/login.jsx";
import Search from "./pages/Search/search.jsx";
import SignIn from "../src/pages/SignIn.jsx";
import NowPlaying from "./pages/categories/NowPlaying.jsx";
import { TopRated } from "./pages/categories/TopRated.jsx";
import { Popular } from "./pages/categories/Popular.jsx";
import { UpComing } from "./pages/categories/UpComing.jsx";
import Category from "./pages/categories/Category.jsx";
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
        path: "category/now_playing",
        element: <NowPlaying />,
      },
      {
        path: "category/popular",
        element: <Popular />,
      },
      {
        path: "category/top_rated",
        element: <TopRated />,
      },
      {
        path: "category/upcoming",
        element: <UpComing />,
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
