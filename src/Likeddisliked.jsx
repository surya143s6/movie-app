import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
export function Likeddisliked() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div className="like-dislike-container">
      <div className="like-container">
        <button onClick={() => setLike(like + 1)}>
              <ThumbUpIcon />
              {like}
            </button>
          </div>
          <div className="dislike-container">
            <button onClick={() => setDislike(dislike + 1)}>
              <ThumbDownIcon />
              {dislike}
            </button>
      </div>
    </div>
  );
}
