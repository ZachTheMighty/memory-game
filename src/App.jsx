import Card from "./components/card.jsx";
import { useState } from "react";

export default function App() {
  const [gifs, setGifs] = useState(
    Object.values(import.meta.glob("./assets/*", { eager: true })),
  );

  return (
    <div className="min-h-screen grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-16">
      {gifs.map((gif, index) => (
        <Card gif={gif} key={index} />
      ))}
    </div>
  );
}
