import Link from "next/link";

const Navbar = () => {
  return (
    <div className="z-10 w-full px-10 py-3">
      <Link href="/" className="text-2xl font-bold text-blue-500">
        Ermuxan
        <br />
        <span>Music</span>
      </Link>
    </div>
  );
};

export default Navbar;
