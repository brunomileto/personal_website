import { ActionButton } from "../../ActionButton";

import fileToDownload from "../../../assets/react.svg";
import React from "react";

interface HeadingNavItemsProps {
  isHamburgerMenu?: boolean;
}

export function HeadingNavItems({
  isHamburgerMenu = false,
}: HeadingNavItemsProps) {
  return (
    <nav
      className={`${
        isHamburgerMenu
          ? "flex flex-col mx-4 items-end  bg-backgroundBlue"
          : "hidden md:flex md:flex-row"
      } justify-center items-center gap-8`}
    >
      <a
        href="#"
        className="flex gap-2 border-b-2 border-transparent 
        hover:border-accent/80 hover:transition-colors hover:delay-150"
      >
        <span className="text-accent font-mono text-base">01.</span>
        <span
          className="text-subTitleLight font-mono text-base
        hover:text-white hover:transition-colors hover:delay-150"
        >
          About
        </span>
      </a>
      <a
        href="#"
        className="flex gap-2 border-b-2 border-transparent 
        hover:border-accent/80 hover:transition-colors hover:delay-150"
      >
        <span className="text-accent font-mono text-base">02.</span>
        <span
          className="text-subTitleLight font-mono text-base 
        hover:text-white hover:transition-colors hover:delay-150"
        >
          Projects
        </span>
      </a>
      <a
        href="#"
        className="flex gap-2 border-b-2 border-transparent 
        hover:border-accent/80 hover:transition-colors hover:delay-150"
      >
        <span className="text-accent font-mono text-base">03.</span>
        <span
          className="text-subTitleLight font-mono text-base 
        hover:text-white hover:transition-colors hover:delay-150"
        >
          Contact
        </span>
      </a>
      <ActionButton
        hrefLink="./Inter.zip"
        fileName="Inter.zip"
        buttonText="Resume"
      />
    </nav>
  );
}
