import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';
import File2FillIcon from 'remixicon-react/File2FillIcon';
import Folder from 'remixicon-react/Folder2FillIcon';

import { Disclosure } from '@headlessui/react';

import { AboutSubMenuNames, SubMenuItens } from '../data';

interface Props {
  subMenuName: AboutSubMenuNames;
  subMenuItems: SubMenuItens[];
  handleSubMenuClick: (name: string) => void;
}

export function DisclosureSubMenu({
  subMenuName,
  subMenuItems,
  handleSubMenuClick,
}: Props) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="mt-1">
          <Disclosure.Button className="flex flex-row gap-1 items-center">
            <ArrowRightSLineIcon
              size={16}
              className={
                open
                  ? "rotate-90 transform transition-transform duration-300"
                  : ""
              }
            />
            <Folder
              size={13}
              className={
                subMenuName === "bio"
                  ? "text-accent-orange"
                  : subMenuName === "education"
                  ? "text-accent-redOrange"
                  : "text-secondary-blue"
              }
            />
            <span className="text-sm font-normal leading-6">{subMenuName}</span>
          </Disclosure.Button>
          <Disclosure.Panel className="flex flex-col gap-1 items-start mt-1">
            {subMenuItems.map((item) => {
              return (
                <button
                  onClick={() => {
                    handleSubMenuClick(item.name);
                  }}
                  key={item.name}
                  className="flex flex-row gap-1 items-center"
                >
                  <ArrowRightSLineIcon size={16} className="text-transparent" />
                  <File2FillIcon size={12} />
                  <span className="text-sm font-light leading-4">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
