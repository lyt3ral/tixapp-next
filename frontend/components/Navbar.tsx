import { Logo } from "../components/Logo";
import { SearchBar } from "./SearchBar";
import { Switch } from "../components/ui/Switch";

export const Navbar = () => {
  return (
    <>
      <div className="flex w-full bg-primary text-primary-foreground flex-row items-center justify-between px-7 p-3">
        <Logo />
        <SearchBar />
        <Switch />
      </div>
      <div className="flex flex-row w-full bg-secondary text-secondary-foreground items-center justify-center p-2 space-x-40 text-white">
        <p>Home</p>
        <p>Movies</p>
        <p>Bookings</p>
      </div>
    </>
  );
};

//bg-[#5C357C]
