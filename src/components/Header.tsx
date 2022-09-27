import { NavLink } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
import { pages } from "../Router";

export function Header() {
  return (
    <header className="border-b-1 rounded-t-lg border-lines h-[55px]">
      <nav className="flex items-center justify-between w-full h-full">
        <NavLink
          className="px-4 md:px-0 md:pl-4 md:flex-shrink-0 md:w-[calc(40000vw/1920)] lg:w-[calc(31100vw/1920)]"
          to={pages.home.path}
        >
          bruno_mileto
        </NavLink>
        <HamburgerMenu />
        <div
          className="hidden md:flex md:flex-row md:items-center 
          w-full h-full"
        >
          <NavLink
            to={pages.home.path}
            className=" border-l-1 border-l-lines border-b-2 border-b-transparent
             hover:border-b-accent-orange p-4 h-full hover:text-secondary-white/80 
             transition-colors delay-150"
          >
            {pages.home.name}
          </NavLink>
          <NavLink
            to={pages.about.path}
            className=" border-l-1 border-l-lines border-b-2 border-b-transparent
             hover:border-b-accent-orange p-4 h-full hover:text-secondary-white/80 
             transition-colors delay-150"
          >
            {pages.about.name}
          </NavLink>
          <NavLink
            to={pages.projects.path}
            className=" border-x-1 border-x-lines border-b-2 border-b-transparent
             hover:border-b-accent-orange p-4 h-full hover:text-secondary-white/80 
             transition-colors delay-150 "
          >
            {pages.projects.name}
          </NavLink>
        </div>
        <NavLink
          to={pages.contact.path}
          className=" hidden md:block border-l-1 border-l-lines border-b-2 border-b-transparent
           hover:border-b-accent-orange p-4 h-full hover:text-secondary-white/80 
           transition-colors delay-150"
        >
          {pages.contact.name}
        </NavLink>
      </nav>
    </header>
  );
}
