import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/root-layout.jsx';
import MoviesPage from './pages/MoviesPage/MoviesPage.jsx';
import NowPlayingPage from './pages/NowPlayingPage.jsx'; // 새로 추가한 페이지들
import PopularPage from './pages/PopularPage.jsx';
import TopRatedPage from './pages/TopRatedPage.jsx';
import UpcomingPage from './pages/UpcomingPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: 'movies', element: <MoviesPage /> },
            { path: 'movies/now-playing', element: <NowPlayingPage /> },
            { path: 'movies/popular', element: <PopularPage /> },
            { path: 'movies/top-rated', element: <TopRatedPage /> },
            { path: 'movies/up-coming', element: <UpcomingPage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
