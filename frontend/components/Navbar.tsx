import Logo from "../components/Logo";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full bg-darkdark flex-row items-center justify-between px-7 p-3">
        <Logo />
        <SearchBar />
      </div>
      <div className="flex flex-row w-full bg-[#5C357C] items-center justify-center p-2 space-x-40 text-white">
        <p>Home</p>
        <p>Movies</p>
        <p>Bookings</p>
      </div>
    </>
  );
};

export default Navbar;
