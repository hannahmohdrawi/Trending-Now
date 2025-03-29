import {useState} from "react";
import TrendingList from "./TrendingList";
import './App.css';

export default function App() {
  const movieArray = [
    {
      title: "Spirited Away",
      releaseYear: 2001,
      imageUrl: "https://en.wikipedia.org/wiki/Spirited_Away#/media/File:Spirited_Away_Japanese_poster.png"
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

  const [movieData,setMovieData] = useState(movieArray);
  return (
    <div className="App">
      <TrendingList movies={movieData} />
    </div>
  );
}
