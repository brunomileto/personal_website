import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import Hamburger from "hamburger-react";

import { HeadingNavItems } from "./HeadingNavItems";

export function HamburgerView() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Popover.Root defaultOpen={false}>
      <Popover.Trigger className="flex justify-between md:hidden outline-none w-full h-fit text-accent/70 focus-within:outline-none">
        <div></div>
        <Hamburger hideOutline={false} />
      </Popover.Trigger>
      <Popover.Content className="  h-full w-[100vw]">
        <Popover.Close />
        <HeadingNavItems isHamburgerMenu />
      </Popover.Content>
    </Popover.Root>
  );
}
