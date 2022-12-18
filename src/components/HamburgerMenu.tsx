import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';

import * as Popover from '@radix-ui/react-popover';

import { pages } from '../utils/pages';

export function HamburgerMenu() {
  const [isHamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  return (
    <div className="block z-50 md:hidden">
      <Hamburger
        toggle={setHamburgerOpen}
        toggled={isHamburgerOpen}
        size={18}
      />
      <div
        id="layer"
        className={`${
          isHamburgerOpen
            ? "fixed top-[66px] left-[18px] right-[17px] bottom-[61px] bg-primary-marine"
            : "hidden"
        } `}
      >
        <div className="flex flex-col bg-primary-marine ">
          {Object.values(pages).map((page) => {
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
          })}
        </div>
      </div>
    </div>
  );
}
