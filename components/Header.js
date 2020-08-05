import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-8 bg-gray-500 text-white items-center">
      <Link href="/">
        <a>
          <h1 className="text-2xl tracking-wide">Next Blogging App</h1>
        </a>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
