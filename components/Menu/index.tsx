import Link from "next/link";

const Menu = () => {
  return (
    <nav className="column side" style={{ backgroundColor: "#aaa" }}>
      <ul>
        <li>
          <Link legacyBehavior href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a>ABOUT</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/contact">
            <a>CONTACT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
