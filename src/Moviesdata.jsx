import { useEffect, useState } from "react";
import { Moviesfulldetails } from "./Moviesfulldetails";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export function Moviesdetails() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://6971d21b32c6bacb12c49d77.mockapi.io/movieslist", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((moviesdata) => setMovies(moviesdata));
  }, []);

  const moviedataclone = () => {
    fetch("https://6971d21b32c6bacb12c49d77.mockapi.io/movieslist", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((moviesdata) => setMovies(moviesdata));
  };

  const deletemovie = (id) => {
    fetch(`https://6971d21b32c6bacb12c49d77.mockapi.io/movieslist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => moviedataclone());
  };

  return (
    <section className="moviesdata-container">
      {movies.map(({ name, poster, rating, summary, id }) => (
        <Moviesfulldetails
          id={id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          deletemovie={
            <div>
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => deletemovie(id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          }
        />
      ))}
    </section>
  );
}
