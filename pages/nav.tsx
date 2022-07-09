import navlinks from "../data/links";
import Link from "next/link";

const Nav = ({}) => {
  return (
    <nav className="hidden show navLinks flex-col items-center duration-150 h-screen top-0 justify-center">
      {navlinks.map((nav) => (
        <>
        <Link href={nav.link} key={nav.title}>
          <a>{nav.title}</a>
        </Link>
        <br />
        </>
      ))}
    </nav>
  );
};

export default Nav;