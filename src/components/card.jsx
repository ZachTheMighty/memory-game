import img from "/home/klux/downloads/vagabond.jpg";

export default function Card() {
  return (
    <div className="bg-slate-700 h-80 p-2 rounded-md">
      <img className="h-[80%] object-cover rounded-md" src={img} />
      <div className="h-[20%] flex justify-center items-center text-2xl font-semibold">
        text
      </div>
    </div>
  );
}
