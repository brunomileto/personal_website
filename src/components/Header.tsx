import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { usePages } from '../context/PageNamesContext';
import { HamburgerMenu } from './HamburgerMenu';

export function Header() {
  const { isLoading, pages } = usePages();
  const router = useRouter();
  const actualPath = router.pathname;
  return (
    <header className="border-b-1 rounded-t-lg border-lines h-[55px !important] ">
      <nav className="flex items-center justify-between w-full h-full">
        <Link href={pages.home.path} passHref>
          <a
            title="Bruno Mileto"
            className="px-4 md:px-0 md:pl-4 md:flex-shrink-0 md:w-[calc(40000vw/1920)] lg:w-[calc(31100vw/1920)]"
          >
            bruno_mileto
          </a>
        </Link>
        <HamburgerMenu />
        <div
          className="hidden md:flex md:flex-row md:items-center 
          w-full h-full"
        >
          <Link href={pages.home.path} passHref>
            <a
              title={pages.home.name}
              className={` border-l-1 border-l-lines border-b-2 border-b-transparent
             p-4 h-full hover:text-secondary-white/80 transition-colors delay-150
             ${actualPath == pages.home.path ? "border-b-accent-orange" : "hover:border-b-accent-orange"}`}
            >
              {pages.home.name}
            </a>
          </Link>
          <Link href={pages.about.path} passHref>
            <a
              title={pages.about.name}
              className={` border-l-1 border-l-lines border-b-2 border-b-transparent
             p-4 h-full hover:text-secondary-white/80 transition-colors delay-150
             ${actualPath == pages.about.path ? "border-b-accent-orange" : "hover:border-b-accent-orange"}`}
            >
              {pages.about.name}
            </a>
          </Link>
          <Link href={pages.projects.path} passHref>
            <a
              title={pages.projects.name}
              className={` border-x-1 border-x-lines border-b-2 border-b-transparent
             p-4 h-full hover:text-secondary-white/80 transition-colors delay-150
             ${actualPath == pages.projects.path ? "border-b-accent-orange" : "hover:border-b-accent-orange"}`}
            >
              {pages.projects.name}
            </a>
          </Link>
        </div>
        <Link href={pages.contact.path} passHref>
          <a
            title={pages.contact.name}
            className={` hidden md:block border-l-1 border-l-lines border-b-2 
          border-b-transparent p-4 h-full hover:text-secondary-white/80 
          transition-colors delay-150
           ${actualPath == pages.contact.path ? "border-b-accent-orange" : "hover:border-b-accent-orange"}`}
          >
            {pages.contact.name}
          </a>
        </Link>
      </nav>
    </header>
  );
}
