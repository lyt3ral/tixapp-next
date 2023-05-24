import Poster from "../components/Poster";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <div className="text-3xl font-semibold p-7 pl-40">Reccomended Movies</div>
      <div className="flex flex-row space-x-8 justify-center w-full">
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
      </div>
      <div className="flex w-full text-muted-foreground py-5 justify-center">
        This page is approved by the CCP 🧧
      </div>
    </div>
  );
}
