import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/root-layout';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import NowPlayingPage from './pages/NowPlayingPage';
import PopularPage from './pages/PopularPage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import SearchPage from './pages/SearchPage/SearchPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import { AuthProvider } from './AutoContext';
import TrendingPage from './pages/TrendingPage';
import PopularActorsPage from './pages/PopularActorsPage';
import TVDetailPage from './pages/TVDetailPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, errorElement: <NotFound />, children: [
      { path: '/', element: <HomePage /> },
      { path: 'movies', element: <MoviesPage /> },
      { path: 'movies/now-playing', element: <NowPlayingPage /> },
      { path: 'movies/popular', element: <PopularPage /> },
      { path: 'movies/top-rated', element: <TopRatedPage /> },
      { path: 'movies/upcoming', element: <UpcomingPage /> },
      { path: 'movies/:movieId', element: <MovieDetailPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'movies/trending', element: <TrendingPage /> },
      { path: 'actors/popular', element: <PopularActorsPage /> },
      { path: 'tv/:tvId', element: <TVDetailPage /> },
  ]},
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
