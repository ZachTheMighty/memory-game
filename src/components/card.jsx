import { useState } from "react";
import getTitle from "../utils/get_title.js";

export default function Card({
  gif,
  gifs,
  setGifs,
  shuffle,
  score,
  setScore,
  best,
  setBest,
}) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      onClick={() => {
        !clicked && setScore((prevScore) => prevScore + 1);
        if (clicked) {
          setScore(0);
          if (score > best) setBest(score);
        }
        setClicked(true);
        setGifs(shuffle(gifs));
      }}
      className="bg-slate-800 h-80 p-2 rounded-md hover:-translate-y-1 trasnition-translate-y duration-100 hover:cursor-pointer hover:shadow-[0_0px_10px_0px_rgba(255,255,255,0.5)]"
    >
      <img
        className="w-full h-[80%] object-cover rounded-md"
        src={gif.default}
      />
      <div className="h-[20%] flex justify-center items-center text-2xl font-semibold">
        {getTitle(gif.default)}
      </div>
    </div>
  );
}
