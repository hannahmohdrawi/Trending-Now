import {useState} from "react";
import TrendingList from "./TrendingList";
import './App.css';

export default function App() {
  const movieArray = [
    {
      title: "Interstellar",
      releaseYear: 2014,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
    },
    {
      title: "Inception",
      releaseYear: 2010,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg"
    },
    {
      title: "The Matrix",
      releaseYear: 1999,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
    }
  ];

  const [movie,setMovie] = useState(movieArray);
  return (
    <div className="App">
      <TrendingList />
    </div>
  );
}
