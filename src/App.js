import {useState} from "react";
import TrendingList from "./TrendingList";
import './App.css';

export default function App() {
  const movieArray = [
    {
      title: "Spirited Away",
      releaseYear: 2001,
      imageUrl: "https://image.tmdb.org/t/p/original/yA6TbjztJtop9sqNkZjhsUDq2Uy.jpg"
    },
    {
      title: "My Neighbour Totoro",
      releaseYear: 1988,
      imageUrl: "https://image.tmdb.org/t/p/original/aYbj5uFxEBMewFIlBJFw3uwdf5P.jpg"
    },
    {
      title: "Howl's Moving Castle",
      releaseYear: 2004,
      imageUrl: "https://i.pinimg.com/originals/c0/e3/1b/c0e31b0b38cda01c2b1e178919773130.jpg"
    },
    {
      title: "The Tale of the Princess Kaguya",
      releaseYear: 2013,
      imageUrl: "https://th.bing.com/th/id/R.9d75aed345b40fd98b620ea3eb8a5031?rik=NwExQLKaRhmZpg&pid=ImgRaw&r=0"
    },
    {
      title: "The Red Turtle",
      releaseYear: 2016,
      imageUrl: "https://maidenalleycinema.org/sites/default/files/styles/full_poster/public/movies/the-red-turtle-58af12807dbfb.jpg?itok=2DbIgIib"
    },
    {
      title: "The Boy and the Heron",
      releaseYear: 2023,
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/727caf193914189.65f344f2e35ba.png"
    }
  ];

  const [movieData,setMovieData] = useState(movieArray);
  return (
    <div className="App">
      <TrendingList movies={movieData} />
    </div>
  );
}
