"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({
  href,
  children,
}: Props) {
  const pathname = usePathname();

  const active =
    pathname === href;

  return (
    <Link
      href={href}
      className={
        active
          ? "font-bold"
          : ""
      }
    >
      {children}
    </Link>
  );
}