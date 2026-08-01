import Card from "./components/card.jsx";

export default function App() {
  const gifs = Object.values(
    import.meta.glob("./assets/*", { eager: true }),
  ).sort(() => Math.random() - 0.5);

  return (
    <>
      <div className="flex flex-col mb-4 text-xl sm:text-2xl font-semibold">
        <div>Score: 0</div>
        <div>Best: 0</div>
      </div>
      <div className="min-h-screen grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-16">
        {gifs.map((gif, index) => (
          <Card gif={gif} key={index} />
        ))}
      </div>
    </>
  );
}
