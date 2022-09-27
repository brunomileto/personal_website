import { RemixiconReactIconComponentType } from "remixicon-react";
import { Disclosure } from "@headlessui/react";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";
type DisclosureMenuLinkType = {
  icon: RemixiconReactIconComponentType;
  name: string;
  href: string;
};

interface DisclosureMenuLinksProps {
  menuName: string;
  links: DisclosureMenuLinkType[];
}

export function DisclosureMenuLinks({
  links,
  menuName,
}: DisclosureMenuLinksProps) {
  return (
    <Disclosure>
      {({ open }) => {
        return (
          <>
            <Disclosure.Button
              className={`px-7 md:px-0 md:pl-2 md:py-2 py-1 bg-lines 
            md:bg-transparent w-full flex flex-row gap-[2px] items-center 
            md:border-b-1 md:border-t-1 md:border-lines 
            md:text-sm `}
            >
              <ArrowRightSFillIcon
                size={20}
                className={
                  open
                    ? "rotate-90 transform transition-transform duration-300"
                    : ""
                }
              />
              <span className=" text-secondary-white">{menuName}</span>
            </Disclosure.Button>
            <Disclosure.Panel
              className="flex flex-col pl-9 md:pl-7 mt-2 mb-4 
                      gap-2 md:gap-2"
            >
              {links.map((link) => {
                return (
                  <a
                    href={link.href}
                    className="text-sm md:text-xs flex md:w-fit flex-row items-center gap-2"
                  >
                    <link.icon size={15} className="" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </Disclosure.Panel>
          </>
        );
      }}
    </Disclosure>
  );
}
