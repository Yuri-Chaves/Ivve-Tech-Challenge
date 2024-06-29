"use client";

import { CiMenuFries } from 'react-icons/ci'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Chuck from './Chuck';
import { links } from './Nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const imgHeight = 24;

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className='text-white text-[24px] hover:text-orange-600 transition-all' />
      </SheetTrigger>
      <SheetContent className='flex flex-col gap-4'>
        <Chuck height={24} color="#ea580c " />
        <nav className='mt-4 flex flex-col gap-3'>
        {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-white px-2 rounded ${
            link.href === pathname && "bg-orange-600"
            } capitalize font-semibold transition-all ${
              link.href !== pathname && "hover:text-orange-600"
            }`}>
          {link.name}
        </Link>
      ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}