import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../src/layout/root-layout.jsx';
import MoviesPage from '../src/pages/MoviesPage/MoviesPage.jsx';
import NowPlayingPage from './pages/NowPlayingPage.jsx';
import PopularPage from './pages/PopularPage.jsx';
import TopRatedPage from './pages/TopRatedPage.jsx';
import UpcomingPage from './pages/UpcomingPage.jsx';
import SearchPage from '../src/pages/SearchPage/SearchPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import NotFound from '../src/pages/not-found.jsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            { path: 'movies', element: <MoviesPage /> },
            { path: 'movies/now-playing', element: <NowPlayingPage /> },
            { path: 'movies/popular', element: <PopularPage /> },
            { path: 'movies/top-rated', element: <TopRatedPage /> },
            { path: 'movies/upcoming', element: <UpcomingPage /> },
            { path: 'search', element: <SearchPage /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'signup', element: <SignupPage /> }, 
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
