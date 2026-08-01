import Card from "./card.jsx";
import { useState } from "react";
import shuffle from "../utils/shuffle.js";

export default function Game() {
  const [gifs, setGifs] = useState(
    shuffle(Object.values(import.meta.glob("../assets/*", { eager: true }))),
  );
  const object = {};
  gifs.forEach((gif) => (object[gif.default] = false));
  const [clicked, setClicked] = useState(object);

  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  return (
    <>
      <div className="flex flex-col mb-4 text-xl sm:text-2xl font-semibold">
        <div>Score: {score}</div>
        <div>Best: {best}</div>
      </div>
      <div className="min-h-screen grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-16">
        {gifs.map((gif) => (
          <Card
            gif={gif}
            key={gif.default}
            gifs={gifs}
            setGifs={setGifs}
            score={score}
            setScore={setScore}
            best={best}
            setBest={setBest}
            shuffle={shuffle}
            clicked={clicked}
            setClicked={setClicked}
          />
        ))}
      </div>
    </>
  );
}
