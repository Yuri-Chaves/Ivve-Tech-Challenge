import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const imgHeight = 24;

export default function Header() {
  return (
    <header className="py-4 xl:py-6 px-6 bg-orange-400 shadow-md flex flex-row justify-between items-center">
      <Link href="/">
        <div className="hidden xsm:flex">
          <Image src="/chuck.png" alt="chuck" height={imgHeight} width={imgHeight * 11.5}/>
        </div>
      </Link>
      <div className="hidden md:flex">
        <Nav />
      </div>
      <div className="flex md:hidden">
        <MobileNav />
      </div>
    </header>
  )
}