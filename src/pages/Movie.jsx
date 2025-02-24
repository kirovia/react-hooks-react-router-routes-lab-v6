import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {

  const params = useParams();
  const [movieTitle, setMovieTitle] = useState('')
  const [movieGenres, setMovieGenres] = useState([])
  const [movieTime, setMovieTime] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${params.id}`)
      .then(resp => resp.json())
      .then(data => {
        setMovieTitle(data.title)
        setMovieGenres(data.genres)
        setMovieTime(data.time)
      })
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movieTitle}</h1>
        <p>{movieTime} minutes</p>
        {movieGenres.map(genre => <span key={genre}>{genre}</span>)}
      </main>
    </>
  );
};

export default Movie;
