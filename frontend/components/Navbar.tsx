import Icon from "../components/Icon";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full bg-darkdark flex-row items-center p-5">
        <Icon />
        <p className="text-[#9f9fa3]">Home</p>
        <p className="text-[#9f9fa3]">Movies</p>
        <p className="text-[#9f9fa3]">Bookings</p>
      </div>
    </>
  );
};

export default Navbar;
