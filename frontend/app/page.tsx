import { Poster } from "../components/Poster";

export default function Home() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="text-3xl font-semibold p-8">Reccomended Movies</div>
      <div className="flex flex-row space-x-8 justify-center w-full">
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
      </div>
    </div>
  );
}
