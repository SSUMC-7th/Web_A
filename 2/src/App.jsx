import { useState } from 'react';
import ToDoList from './components/ToDoList';
import MovieList from './components/MovieList';
import { MOVIES } from './mocks/movie';
import "./App.css"

function App() {
  return (
    // <ToDoList/>
    <MovieList movies={MOVIES.results}/>
  );
}

export default App;
