import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import File2FillIcon from "remixicon-react/File2FillIcon";
import Folder from "remixicon-react/Folder2FillIcon";
import MailFillIcon from "remixicon-react/MailFillIcon";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";

import { Disclosure } from "@headlessui/react";

import userImg from "../assets/userImg.png";
import { CodeSnippet } from "../components/CodeSnippet";
import { DisclosureMenuLinks } from "../components/DisclosureMenuLinks";
import { Spinner } from "../components/Spinner";
import { useCodeSnippets } from "../context/CodesContext";

export enum AboutMenuNames {
  personalInfo = "personal_info",
  contacts = "contacts",
}

export enum AboutSubMenuNames {
  bio = "bio",
  interests = "interests",
  education = "education",
}

interface Menu {
  name: AboutMenuNames;
  subMenu: SubMenu[];
}

interface SubMenu {
  name: AboutSubMenuNames;
  items: SubMenuItens[];
}

export interface SubMenuItens {
  name: string;
  description: string;
}

export const aboutMenu: Menu[] = [
  {
    name: AboutMenuNames.personalInfo,
    subMenu: [
      {
        name: AboutSubMenuNames.bio,
        items: [
          {
            name: "myBio",
            description: `I'm Bruno Mileto, FullStack Developer, located at Brazil, with 2+ years of experience. I worked and studied different technologies,
              during this time. I currently work professionally using C# / ASP.NET
              and ReactJs.
              I was introduced to the Dev world by a professor during my mechanical
              engineering bachelor. I still finished the course and even worked
              two years as a mechanical engineer but I decided to change my career
              and became a Dev.
              First, I studied and did freelancer projects with Python and Django
              and, through those projects, I got a job as a Dev. The company uses
              Delphi and C# /ASP.Net, and I did projects and client support for a
              legacy business management system.
              Later, I was contacted via LinkedIn to participate in a selection
              process at my current company. Here, we develop custom projects for
              customers. In those projects, we participate in the whole life time,
              from planning to implementation and, obviously, going through its
              development. Here, we use internal frameworks, C# / ASP.NET and
              Javascript.
              Finally, I still do freelance. As a freelance, I develop websites,
              usually landing pages and SPAs, using pure HTML/CSS/Javascript,
              bootstrap, webflow and, recently, ReactJs.
              `,
          },
        ],
      },
      {
        name: AboutSubMenuNames.education,
        items: [
          { name: "university", description: "alsdkjaksjdlkasd" },
          { name: "courses", description: "ajksdhkajsdhkajsh" },
        ],
      },
      {
        name: AboutSubMenuNames.interests,
        items: [
          { name: "sports", description: "alsdkjaksjdlkasd" },
          { name: "technology", description: "ajksdhkajsdhkajsh" },
          { name: "daily", description: "ajksdhkajsdhkajsh" },
        ],
      },
    ],
  },
  { name: AboutMenuNames.contacts, subMenu: [] },
];

const About = () => {
  const codeSnippetsData = useCodeSnippets();
  const [selectedMenuName, _] = useState<AboutMenuNames>(AboutMenuNames.personalInfo);

  const [selectedSubMenuName, setSelectedSubMenuName] = useState<AboutSubMenuNames>(AboutSubMenuNames.bio);

  const [selectedSubMenuItens, setSelectedSubMenuItens] = useState<SubMenuItens>();

  const [selectedSubMenuItensDescriptionList, setSelectedSubMenuItensDescriptionList] = useState<string[]>([]);

  const [personalInfoMenu, contactsMenu] = aboutMenu;

  if (!selectedSubMenuItens) {
    const [projectInfo, _] = aboutMenu;
    projectInfo.subMenu.forEach((subMenu) => {
      subMenu.items.forEach((item) => {
        if (item.name === "myBio") {
          setSelectedSubMenuItens(item);
          setSelectedSubMenuItensDescriptionList(getSelectedSubMenuItensDescriptionList(item?.description));
        }
      });
    });
  }

  function getSelectedSubMenuItensDescriptionList(description: string): string[] {
    const selectedSubMenuItensWordsList = description.split(" ");
    const wordsList = [];
    let words = "";

    for (let index = 0; index < selectedSubMenuItensWordsList.length; index++) {
      words += `${selectedSubMenuItensWordsList[index]} `;
      if (words.length >= 2300) {
        wordsList.push(words);
        words = "";
      }
    }
    if (wordsList.length <= 0) wordsList.push(words);
    return wordsList;
  }

  function handleSelectedMenu(name: string) {
    const [projectInfo, _] = aboutMenu;
    const selectedSubMenu = projectInfo.subMenu.find((subMenu) => subMenu.items.find((item) => item.name === name));

    setSelectedSubMenuName(selectedSubMenu!.name);
    setSelectedSubMenuItens(selectedSubMenu?.items.find((item) => item.name === name));
  }

  const isLoadingData = !codeSnippetsData || codeSnippetsData.length <= 0;

  return (
    <div
      className="w-full h-full flex flex-col md:flex-row justify-start
               md:overflow-hidden overflow-scroll mb-0"
    >
      <div id="title" className="px-7 pt-6 pb-8 md:hidden">
        <span className="text-secondary-white">_aboutMe</span>
      </div>
      <div
        id="lateralMenu"
        className="flex flex-col gap-2 md:gap-0 relative md:w-[calc(40000vw/1920+1px)]
                lg:w-[calc(31100vw/1920)] md:border-r-1 md:border-lines
                md:flex-shrink-0 md:overflow-x-hidden"
      >
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
                    className={open ? "rotate-90 transform transition-transform duration-300" : ""}
                  />
                  <span className=" text-secondary-white">{personalInfoMenu.name}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-col px-7 mt-1 mb-3">
                  {personalInfoMenu.subMenu.map((subMenu) => {
                    return (
                      <Disclosure>
                        {({ open }) => (
                          <div className="mt-1">
                            <Disclosure.Button className="flex flex-row gap-1 items-center">
                              <ArrowRightSLineIcon
                                size={16}
                                className={open ? "rotate-90 transform transition-transform duration-300" : ""}
                              />
                              <Folder
                                size={13}
                                className={
                                  subMenu.name === "bio"
                                    ? "text-accent-orange"
                                    : subMenu.name === "education"
                                    ? "text-accent-redOrange"
                                    : "text-secondary-blue"
                                }
                              />
                              <span className="text-sm font-normal leading-6">{subMenu.name}</span>
                            </Disclosure.Button>
                            <Disclosure.Panel className="flex flex-col gap-1 items-start mt-1">
                              {subMenu.items.map((item) => {
                                return (
                                  <button
                                    onClick={() => {
                                      handleSelectedMenu(item.name);
                                    }}
                                    key={item.name}
                                    className="flex flex-row gap-1 items-center"
                                  >
                                    <ArrowRightSLineIcon size={16} className="text-transparent" />
                                    <File2FillIcon size={12} />
                                    <span className="text-sm font-light leading-4">{item.name}</span>
                                  </button>
                                );
                              })}
                            </Disclosure.Panel>
                          </div>
                        )}
                      </Disclosure>
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
      </div>
      <div
        id="content"
        className="mt-9 md:mt-0  md:text-sm  px-7 md:px-0 flex flex-col md:flex-row gap-9 md:gap-0 md:w-full"
      >
        <section className="flex flex-col gap-4 md:gap-0 md:flex-1 md:w-full max-w-[900px]">
          <header
            id="content-header"
            className="md:flex  md:flex-row md:gap-3 md:border-b-1 
                   md:border-lines md:pl-2  md:w-full md:items-center "
          >
            <span className="text-secondary-sky md:hidden">\ {selectedMenuName}</span>
            <span className="text-secondary-sky md:hidden"> \ {selectedSubMenuName}</span>
            <span className="text-secondary-white md:py-2"> \ {selectedSubMenuItens?.name}</span>
            <div
              className="hidden md:inline cursor-pointer ml-6 pr-4 border-r-1 
                          h-full border-lines md:py-2"
            >
              <CloseFillIcon size={20} className="" />
            </div>
          </header>
          <div className="md:h-full md:pt-0 md:pb-0 w-full md:scrollbar md:scrollbar-thumb-secondary-sky ">
            <div
              className="h-full md:mr-4  md:pt-0 md:border-r-0 md:border-lines md:w-[calc(100vw/3)] 
            2xl:max-w-[calc(100vw/4.5)] "
            >
              <div
                className="text-sm leading-7 break-words  w-full md:h-full
                        md:border-lines whitespace-pre-line "
              >
                {selectedSubMenuItensDescriptionList.map((description) => {
                  return (
                    <p key={description} className="md:px-4  md:pt-4 md:pb-6 md:border-r-1 md:border-lines h-full ">
                      {description}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section id="code-snippet" className="flex flex-col gap-7 md:gap-0 md:border-l-1 md:border-lines md:w-full">
          <div
            id="hidden"
            className="hidden md:flex  md:flex-row md:gap-3 md:border-b-1 
                 md:border-lines md:pl-2  md:w-full md:items-center"
          >
            <span
              className="hidden md:inline cursor-pointer ml-6 pr-4 
                        h-full border-lines md:py-2 text-transparent"
            >
              _
            </span>
          </div>
          <div
            className="md:overflow-y-scroll  md:scrollbar 
                    md:scrollbar-thumb-secondary-sky"
          >
            <div
              className="md:h-full  md:min-h-full md:pt-7 md:mr-4 md:border-lines
                        "
            >
              <header className="md:border-r-1 md:border-lines">
                <span className="text-secondary-white md:text-secondary-sky md:px-10">// Code snippet showcase: </span>
              </header>
              <div
                id="code-snippet-content"
                className="flex flex-col gap-12 md:gap-0 md:h-full md:pl-10 md:overflow-y-visible "
              >
                {isLoadingData ? (
                  <div className="w-full h-[100vh] flex items-center justify-center">
                    <Spinner />
                  </div>
                ) : (
                  codeSnippetsData!.map((codeSnippet) => {
                    return (
                      <div
                        id="snippet"
                        key={codeSnippet.id}
                        className="flex flex-col gap-3 w-full lg:items-center  2xl:items-center md:pr-10 
                       md:border-r-1 md:border-lines md:pt-12 pb-6"
                      >
                        <div className="flex flex-col gap-3 2xl:items-center">
                          <div
                            id="snippet-creator"
                            className="flex flex-row items-center gap-3 md:w-full 2xl:w-full 
                         2xl:max-w-[664px]"
                          >
                            <a
                              className="text-secondary-blue font-bold text-sm flex flex-row items-center gap-3 md:w-full"
                              target="_blank"
                              href={`https://github.com/${codeSnippet.ownerLogin}`}
                            >
                              <img src={codeSnippet.avatarUrl} className="w-10 h-10 rounded-full" />
                              {codeSnippet.ownerLogin}
                            </a>
                          </div>
                          <div
                            id="snippet"
                            className="bg-primary-darkMarine border-1 text-sm leading-7
                          font-extralight border-lines rounded-2xl p-6
                          md:max-w-[664px] lg:w-[calc(72vw/2)] xl:w-[calc(80vw/2)];"
                          >
                            <CodeSnippet codeType={codeSnippet.language} id="code">
                              {codeSnippet.code!}
                            </CodeSnippet>
                          </div>
                          <div id="description" className="border-t-1 w-full border-lines pt-3 md:max-w-[664px] ">
                            <p className="text-xs w-full text-center">{codeSnippet.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
