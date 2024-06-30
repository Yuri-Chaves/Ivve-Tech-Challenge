"use client";

import { CiMenuFries } from 'react-icons/ci'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Chuck from './Chuck';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSiteLanguage } from '@/services';
import Flags from './Flags';
import Image from 'next/image';

export default function MobileNav() {
  const pathname = usePathname();
  const { links, language } = useSiteLanguage();

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className='text-white text-[24px] hover:text-orange-600 transition-all' />
      </SheetTrigger>
      <SheetContent className='flex flex-col gap-4'>
        <div className="flex sm:hidden">
          <Image src={'/chuck_face.png'} alt='chuck' height={24} width={24} />
        </div> 
        <div className="hidden sm:flex">
          <Chuck height={24} color="#ea580c " />
        </div>
        <Flags />
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
          {link.label[language]}
        </Link>
      ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}