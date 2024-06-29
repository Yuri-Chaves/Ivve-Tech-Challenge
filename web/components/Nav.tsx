"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  {
    name: "facts",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
]

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-white ${
            link.href === pathname && "border-b-2 border-b-white"
            } capitalize font-semibold hover:text-orange-600 transition-all`}>
          {link.name}
        </Link>
      ))}
    </nav>
  )
}