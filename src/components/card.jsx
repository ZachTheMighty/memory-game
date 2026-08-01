import { useState } from "react";
import { useEffect } from "react";

export default function Card() {
  const [gifs, setGifs] = useState(
    Object.values(import.meta.glob("../assets/*", { eager: true })),
  );
  const [gif, setGif] = useState(null);

  function fetchData() {
    const random = Math.floor(Math.random() * 11);
    return Promise.resolve({
      data: { images: { original: { url: gifs[random] } } },
    });
  }

  useEffect(() => {
    fetchData().then((data) =>
      setGif({
        url: data.data.images.original.url.default,
        title: data.data.title,
      }),
    );
  }, []);

  return (
    <div className="bg-slate-800 h-80 p-2 rounded-md hover:-translate-y-1 trasnition-translate-y duration-100 hover:cursor-pointer hover:shadow-[0_0px_10px_0px_rgba(255,255,255,0.5)]">
      <img className="w-full h-[80%] object-cover rounded-md" src={gif?.url} />
      <div className="h-[20%] flex justify-center items-center text-2xl font-semibold">
        {gif?.title}
      </div>
    </div>
  );
}
