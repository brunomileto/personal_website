import { useState } from "react";
import CloseFillIcon from "remixicon-react/CloseFillIcon";

import userImg from "../../assets/userImg.png";
import { DisclosureMenu } from "./components/DisclosureMenu";
import {
  aboutMenu,
  AboutMenuNames,
  AboutSubMenuNames,
  SubMenuItens,
} from "./data";
import { CodeSnippet } from "../../components/CodeSnippet";
import { MobileTitle } from "./components/MobileTitle";
import { LateralMenu } from "./components/LateralMenu";
import { SelectedFile } from "./components/SelectedFile";
import { CodeSnippetSection } from "./components/CodeSnippetSection";
import { Content } from "./components/Content";

export function About() {
  const [selectedMenuName, setSelectedMenuName] = useState<AboutMenuNames>(
    AboutMenuNames.personalInfo
  );

  const [selectedSubMenuName, setSelectedSubMenuName] =
    useState<AboutSubMenuNames>(AboutSubMenuNames.bio);

  const [selectedSubMenuItens, setSelectedSubMenuItens] =
    useState<SubMenuItens>();

  if (!selectedSubMenuItens) {
    const [projectInfo, _] = aboutMenu;
    projectInfo.subMenu.forEach((subMenu) => {
      setSelectedSubMenuItens(
        subMenu.items.find((item) => item.name === "myBio")
      );
    });
  }

  function handleSelectedMenu(name: string) {
    const [projectInfo, _] = aboutMenu;
    const selectedSubMenu = projectInfo.subMenu.find((subMenu) =>
      subMenu.items.find((item) => item.name === name)
    );

    setSelectedSubMenuName(selectedSubMenu!.name);
    setSelectedSubMenuItens(
      selectedSubMenu?.items.find((item) => item.name === name)
    );
  }

  return (
    <main
      className="w-full h-full flex flex-col md:flex-row justify-start 
                 md:overflow-hidden overflow-scroll pb-6"
    >
      <MobileTitle />
      <LateralMenu handleSelectedMenu={handleSelectedMenu} />
      <Content
        selectedMenuName={selectedMenuName}
        selectedSubMenuName={selectedSubMenuName}
        selectedSubMenuItens={selectedSubMenuItens}
      />
    </main>
  );
}
