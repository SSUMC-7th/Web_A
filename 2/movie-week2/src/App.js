import { movies } from "./movieDummy.js";
import Movie from "./Components/Movie";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {movies.results.map((item) => {
          return <Movie key={item.id} poster_path={item.poster_path} />;
        })}
      </div>
    </div>
  );
}
export default App;
