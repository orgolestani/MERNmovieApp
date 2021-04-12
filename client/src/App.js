import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import movieShow from "./components/pages/movieShow";
import Home from "./components/Home";

function App() {
  const api = "http://localhost:8080/movies/all";
  const [movies, setMovies] = useState("");
  // fetch data function
 
  return (
    <div className="App">
      <h1>Our new APP</h1>
      <Home />
    </div>
  );
}

export default App;
