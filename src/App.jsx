import Card from "./components/card.jsx";
import { useState } from "react";
import shuffle from "./utils/shuffle.js";

export default function App() {
  const [gifs, setGifs] = useState(
    shuffle(Object.values(import.meta.glob("./assets/*", { eager: true }))),
  );

  return (
    <>
      <div className="flex flex-col mb-4 text-xl sm:text-2xl font-semibold">
        <div>Score: 0</div>
        <div>Best: 0</div>
      </div>
      <div className="min-h-screen grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-16">
        {gifs.map((gif, index) => (
          <Card
            gif={gif}
            key={index}
            gifs={gifs}
            setGifs={setGifs}
            shuffle={shuffle}
          />
        ))}
      </div>
    </>
  );
}
