import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink, Link } from "react-router";

import { Moviesdetails } from "./Moviesdata";
import { Moviesfulldetails } from "./Moviesfulldetails";
import { BasicForm } from "./BasicForm";

function App() {
  return (
    <>
      {/* <Moviesdetails /> */}

      <nav>
        <Link to="/movies">Movies</Link>
        <Link to="/basicform">BasicForm</Link>
      </nav>
      <Routes>
        <Route path="movies" element={<Moviesdetails />} />
        <Route path="basicform" element={<BasicForm />} />
      </Routes>
    </>
  );
}

export default App;
