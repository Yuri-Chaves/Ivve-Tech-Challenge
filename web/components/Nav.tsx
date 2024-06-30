"use client";

import { useSiteLanguage } from "@/services";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const { links, language } = useSiteLanguage();

  return (
    <nav className="flex gap-6">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-white ${
            link.href === pathname && "border-b-2 border-b-white"
            } capitalize font-semibold hover:text-orange-600 transition-all`}>
          {link.label[language]}
        </Link>
      ))}
    </nav>
  )
}