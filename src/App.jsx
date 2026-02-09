import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink, Link } from "react-router";

import { Moviesdetails } from "./Moviesdata";
import { Moviesfulldetails } from "./Moviesfulldetails";

function App() {
  return (
    <>
      {/* <Moviesdetails /> */}

      <nav>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="movies" element={<Moviesdetails />} />
      </Routes>
    </>
  );
}

export default App;
