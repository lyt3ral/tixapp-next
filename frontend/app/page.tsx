import Poster from "../components/Poster";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex text-3xl font-semibold py-8 justify-center">
        Reccomended Movies
      </div>
      <div className="flex flex-row space-x-8 justify-center">
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
      </div>
      <Link
        href="/ccp"
        className="flex w-full text-muted-foreground py-6 justify-center"
      >
        This page is approved by the CCP 🧧
      </Link>
    </div>
  );
}
