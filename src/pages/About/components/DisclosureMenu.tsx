import ArrowRightSFillIcon from 'remixicon-react/ArrowRightSFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import PhoneFillIcon from 'remixicon-react/PhoneFillIcon';

import { Disclosure } from '@headlessui/react';

import { DisclosureMenuLinks } from '../../../components/DisclosureMenuLinks';
import { aboutMenu } from '../data';
import { DisclosureSubMenu } from './DisclosureSubMenu';

interface Props {
  handleSubMenuItemClick: (name: string) => void;
}

export function DisclosureMenu({ handleSubMenuItemClick }: Props) {
  const [personalInfoMenu, contactsMenu] = aboutMenu;
  return (
    <>
      <Disclosure>
        {({ open }) => {
          return (
            <>
              <Disclosure.Button
                className="px-7 md:px-0 md:pl-2 md:py-2 py-1 bg-lines md:bg-transparent
                w-full flex flex-row gap-[2px] items-center md:border-b-1 
              md:border-lines md:text-sm"
              >
                <ArrowRightSFillIcon
                  size={20}
                  className={
                    open
                      ? "rotate-90 transform transition-transform duration-300"
                      : ""
                  }
                />
                <span className=" text-secondary-white">
                  {personalInfoMenu.name}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="flex flex-col px-7 mt-1 mb-3">
                {personalInfoMenu.subMenu.map((subMenu) => {
                  return (
                    <DisclosureSubMenu
                      handleSubMenuClick={handleSubMenuItemClick}
                      key={subMenu.name}
                      subMenuName={subMenu.name}
                      subMenuItems={subMenu.items}
                    />
                  );
                })}
              </Disclosure.Panel>
            </>
          );
        }}
      </Disclosure>
      <DisclosureMenuLinks
        menuName={"contacts"}
        links={[
          { name: "brunomileto@outlook.com", href: "#", icon: MailFillIcon },
          { name: "+5562992861675", href: "#", icon: PhoneFillIcon },
        ]}
      />
    </>
  );
}
