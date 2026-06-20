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
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`
        relative px-1 py-2 text-sm font-medium transition-colors duration-300
        ${active ? "text-primary" : "text-slate-600 hover:text-secondary"}
        group
      `}
    >
      {children}
      <span className={`
        absolute left-0 bottom-0 w-full h-[2px] bg-secondary transition-transform duration-300
        ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
      `} />
    </Link>
  );
}