import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink, Link } from "react-router";

import { Moviesdetails } from "./Moviesdata";
import { Moviesfulldetails } from "./Moviesfulldetails";

function App() {
  return (
    <>
      <Moviesdetails />

      {/* <nav>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes> */}
    </>
  );
}

export default App;
