import { useState } from "react";
import { useEffect } from "react";

export default function Card() {
  const [img, setImg] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=OTDZKDx5zFC6L8ExDOOKwsWJAI4spszj&tag=simpsons",
    )
      .then((response) => response.json())
      .then((data) =>
        setImg({ url: data.data.images.original.url, title: data.data.title }),
      );
  });

  return (
    <div className="bg-slate-800 h-80 p-2 rounded-md hover:-translate-y-1 trasnition-translate-y duration-100 hover:cursor-pointer hover:shadow-[0_0px_10px_0px_rgba(255,255,255,0.5)]">
      <img className="h-[80%] object-cover rounded-md" src={img?.url} />
      <div className="h-[20%] flex justify-center items-center text-2xl font-semibold">
        {img?.title}
      </div>
    </div>
  );
}
