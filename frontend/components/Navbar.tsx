import Logo from "../components/Logo";
import { SearchBar } from "./SearchBar";
import { Switch } from "../components/ui/Switch";

export default function Navbar() {
  return (
    <>
      <div className="flex w-full flex-row items-center justify-between px-7 p-3">
        <Logo />
        <SearchBar />

        <div className="flex flex-row space-x-3">
          <p>Home</p>
          <p>Profile</p>
          <p>Movies</p>
          <p>Bookings</p>
          <Switch />
        </div>
      </div>
    </>
  );
}

//bg-[#5C357C]
