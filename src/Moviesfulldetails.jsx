import { useState } from "react";
import { Likeddisliked } from "./Likeddisliked";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton } from "@mui/material";

export function Moviesfulldetails({
  name,
  poster,
  summary,
  rating,
  deletemovie,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="main-container">
      <div className="image-container">
        <img src={poster} alt={name} />
      </div>

      <div className="top-bar">
        <h3>{name}</h3>
        {/* ---doubt--- */}
        <IconButton onClick={() => setOpen(!open)}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>

        {open && <p>{summary}</p>}
        <h3>⭐ {rating}</h3>
      </div>

      <Likeddisliked />
      {deletemovie}
    </div>
  );
}
