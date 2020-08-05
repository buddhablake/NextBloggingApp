import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-8 text-xl font-thin tracking-widest">
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
