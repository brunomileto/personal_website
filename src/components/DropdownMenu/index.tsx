import { Menu, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import hambImg from "../../assets/svg/hamb.svg";
import { Cross as Hamburger } from "hamburger-react";
import { NavigationType } from "../Header";

interface DropdownMenuProps {
  navigation: NavigationType[];
}

export const DropdownMenu = ({ navigation }: DropdownMenuProps) => {
  const [hambIsOpen, setHambIsOpen] = useState(false);
  return (
    <>
      <Hamburger toggled={hambIsOpen} toggle={setHambIsOpen} />
      <div
        className={`${
          hambIsOpen ? "block" : "hidden"
        } absolute w-[calc(100vw-2rem)] px-2 right-0 h-screen top-20 bg-brand-background `}
      >
        <div className="flex flex-col justify-center items-start gap-3">
          {navigation.map((nav) => (
            <a
              className="font-normal text-base text-brand-white cursor-pointer"
              href={nav.href}
              key={nav.id}
            >
              {nav.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
  // return (
  //   <Menu>
  //     <Menu.Button className="cursor-pointer group">
  //       <img
  //         src={hambImg}
  //         alt="hamburger menu"
  //         className={`${hambEffect && "animation-spin"} w-10 `}
  //       />
  //     </Menu.Button>
  //     <Transition
  //       as={Fragment}
  //       enter="transition ease-out duration-100"
  //       enterFrom="transform opacity-0 scale-95"
  //       enterTo="transform opacity-100 scale-100"
  //       leave="transition ease-in duration-75"
  //       leaveFrom="transform opacity-100 scale-100"
  //       leaveTo="transform opacity-0 scale-95"
  //     >
  //       <Menu.Items></Menu.Items>
  //     </Transition>
  //   </Menu>
  // );
};
