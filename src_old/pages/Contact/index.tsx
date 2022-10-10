import { useState } from 'react';

import { Content } from './components/Content';
import { LateralMenu } from './components/LateralMenu';
import { MobileTitle } from './components/MobileTitle';
import { ContactMenuNames } from './data';

export function Contact() {
  const [selectedMenuName, setSelectedMenuName] = useState<ContactMenuNames>(
    ContactMenuNames.contacts
  );

  return (
    <main
      className="w-full h-full flex flex-col md:flex-row justify-start 
                 md:overflow-hidden overflow-scroll mb-0 "
    >
      <MobileTitle />
      <LateralMenu />
      <Content />
    </main>
  );
}
