import Logo from "../components/Logo";
import { SearchBar } from "./SearchBar";
import { Switch } from "../components/ui/Switch";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex w-full flex-row items-center justify-between px-7 p-3">
        <Logo />
        <SearchBar />

        <div className="flex flex-row space-x-3">
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/movies">Movies</Link>
          <Link href="/bookings">Bookings</Link>
          <Switch id="theme" />
        </div>
      </div>
      <Separator />
      <Label htmlFor=""></Label>
    </>
  );
}

//bg-[#5C357C]
