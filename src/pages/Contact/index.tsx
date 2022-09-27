import { useState } from "react";
import { ContactMenuNames } from "./data";
import { MobileTitle } from "./components/MobileTitle";
import { LateralMenu } from "./components/LateralMenu";
import { Content } from "./components/Content";

export function Contact() {
  const [selectedMenuName, setSelectedMenuName] = useState<ContactMenuNames>(
    ContactMenuNames.contacts
  );

  return (
    <main
      className="w-full h-full flex flex-col md:flex-row justify-start 
                 md:overflow-hidden overflow-scroll pb-6"
    >
      <MobileTitle />
      <LateralMenu />
      <Content />
    </main>
  );
}
