import "./App.css";
import MovieCard from "./components/movie-card";
import { MOVIES } from "./mocks/movie";

function App() {
  const movieList = MOVIES.results;
  const posterUrls = movieList.map((movie) => movie.poster_path);

  return (
    <div className="CardList">
      {posterUrls.map((posterUrl, index) => (
        <MovieCard key={index} imageUrl={posterUrl} />
      ))}
    </div>
  );
}

export default App;
