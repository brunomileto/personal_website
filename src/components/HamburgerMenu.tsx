import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import * as Popover from '@radix-ui/react-popover';

import { pages } from '../Router';
import { Header } from './Header';

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
              <NavLink
                onClick={() => setHamburgerOpen(false)}
                key={page.name}
                className="p-4  border-b-1  border-lines text-secondary-white/70 "
                to={page.path}
              >
                {page.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
