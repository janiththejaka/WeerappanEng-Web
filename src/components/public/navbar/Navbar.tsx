import Link from "next/link";

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
        <Link href="/">
          Company Logo
        </Link>

        <nav
          className="
          flex
          gap-6
          "
        >
          <Link href="/">
            Home
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/services">
            Services
          </Link>

          <Link href="/portfolio">
            Portfolio
          </Link>

          <Link href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}