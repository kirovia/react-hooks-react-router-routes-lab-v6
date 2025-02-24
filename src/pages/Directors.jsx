import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [directors, setDirectors] = useState([])

  useEffect(() =>{
    fetch('http://localhost:4000/directors')
      .then(resp => resp.json())
      .then(data => setDirectors(data))
  }, [])

  const directorsToDisplay = directors.map(director => {
    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorsToDisplay}
      </main>
    </>
  );
};

export default Directors;
