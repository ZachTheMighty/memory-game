import getTitle from "../utils/get_title.js";

export default function Card({ gif, gifs, setGifs, shuffle }) {
  return (
    <div
      onClick={() => {
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
