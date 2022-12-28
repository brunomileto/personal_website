import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';

import * as Popover from '@radix-ui/react-popover';

import { PageNamesType, usePages } from '../context/PageNamesContext';

export function HamburgerMenu() {
  const [isHamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const { pages } = usePages();
  return (
    <div className="block z-50 md:hidden">
      <Hamburger toggle={setHamburgerOpen} toggled={isHamburgerOpen} size={18} />
      <div
        id="layer"
        className={`${
          isHamburgerOpen ? "fixed top-[66px] left-[18px] right-[17px] bottom-[61px] bg-primary-marine" : "hidden"
        } `}
      >
        <div className="flex flex-col bg-primary-marine ">
          {Object.values(pages).map((page: PageNamesType) => {
            if (page.name !== "") {
              return (
                <Link key={page.name} href={page.path} passHref>
                  <a
                    title={page.name}
                    onClick={() => setHamburgerOpen(false)}
                    className="p-4  border-b-1  border-lines text-secondary-white/70 "
                  >
                    {page.name}
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

// This functions gets called at build time
// export async function getStaticProps() {
//   async function getPages() {
//     const { pages } = usePages();
//     return pages;
//   }
//   const locale = navigator.language;
//   const pages = await getPages();
// }
