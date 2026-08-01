import Card from "./components/card.jsx";

export default function App() {
  return (
    <div className="min-h-screen grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-16">
      {Array.from({ length: 12 }).map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
}
