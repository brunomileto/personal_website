import { Disclosure, Menu, Transition } from "@headlessui/react";
import { paths } from "../../types/path";
import { DropdownMenu } from "../DropdownMenu";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { siteData } from "../../services/data";
export type NavigationType = {
  id: number;
  name: string;
  href: string;
  isActive: boolean;
};

const headerData =
  window.navigator.language.includes("pt") ||
  window.navigator.language.includes("br")
    ? siteData.header.ptBr
    : siteData.header.enUs;

console.log(window.navigator.language);

export const navigation: NavigationType[] = [
  { id: 1, isActive: true, name: paths.home.name, href: paths.home.path },
  {
    id: 2,
    isActive: false,
    name: paths.about.name,
    href: paths.about.path,
  },
  {
    id: 3,
    isActive: false,
    name: paths.projects.name,
    href: paths.projects.path,
  },
  {
    id: 4,
    isActive: false,
    name: paths.contact.name,
    href: paths.contact.path,
  },
];

export const Header = () => {
  const [activeNavId, setActiveNavId] = useState(1);

  const handleActiveNavId = (navId: number) => {
    setActiveNavId(navId);
  };
  const isProjectPage = location.pathname.includes("/project/");
  return (
    <header className="sticky top-0 bg-brand-background border-b-2 mb-5 border-brand-border w-full h-20 px-5 flex justify-center items-center">
      <main className="max-w-6xl w-full flex justify-between items-center">
        <a className="cursor-pointer" href={paths.home.path}>
          <h1 className="font-Poppins text-lg group">
            {headerData.title}
            <span className="text-brand-primary group-hover:motion-safe:animate-pulse text-3xl">
              .
            </span>
          </h1>
        </a>
        <nav className=" flex-row gap-10 hidden lg:flex">
          {Object.entries(headerData.navbar).map((navbarKeys) => {
            console.log("teste", navbarKeys);
            const navbarValue = navbarKeys[1];
            return (
              <NavLink
                onClick={() => handleActiveNavId(navbarValue.id)}
                className={({ isActive }) => {
                  return `w-24 font-medium text-base ${
                    isActive || (isProjectPage && navbarValue.id === 3)
                      ? "underline-offset-[5px] decoration-[3px] decoration-brand-hover underline"
                      : undefined
                  }`;
                }}
                id={navbarValue.name}
                key={navbarValue.id}
                to={navbarValue.href}
              >
                {navbarValue.name}
              </NavLink>
            );
          })}
        </nav>
        <div className="relative lg:hidden">
          <DropdownMenu navigation={navigation} />
        </div>
      </main>
    </header>
  );
};
// ---------------------------------
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation2 = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export const Header2 = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation2.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation2.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export const Header3 = () => {
  return (
    <Disclosure
      as="header"
      className="w-full h-20 sticky top-0 bg-brand-background border-b-2 mb-5 border-brand-border px-5 flex justify-center items-center"
    >
      {({ open }) => (
        <main className="max-w-6xl w-full flex justify-between items-center">
          <a className="cursor-pointer">
            <h1 className="font-Poppins text-lg group">
              brunomileto
              <span className="text-brand-primary group-hover:motion-safe:animate-pulse text-3xl">
                .
              </span>
            </h1>
          </a>
          <nav className=" flex-row gap-10 hidden lg:flex">
            {navigation2.map((item) => (
              <a
                className={`"w-24 font-medium text-base" ${
                  item.current
                    ? "underline-offset-[5px] decoration-[3px] decoration-brand-hover underline"
                    : ""
                }`}
                key={item.name}
                href={item.href}
                onClick={() => null}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="relative lg:hidden">
            <DropdownMenu navigation={navigation} />
          </div>
        </main>
      )}
    </Disclosure>
  );
};
