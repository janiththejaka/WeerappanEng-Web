import Link from "next/link";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header
          className="border-b sticky top-0 bg-white z-50"
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        h-16
        flex
        items-center
        justify-between
        "
      >
        <NavLink href="/">
          Company Logo
        </NavLink>

        <nav
          className="
          flex
          gap-6
          "
        >
          <NavLink href="/">
            Home
          </NavLink>

          <NavLink href="/about">
            About
          </NavLink>

          <NavLink href="/services">
            Services
          </NavLink>

          <NavLink href="/portfolio">
            Portfolio
          </NavLink>

          <NavLink href="/contact">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}