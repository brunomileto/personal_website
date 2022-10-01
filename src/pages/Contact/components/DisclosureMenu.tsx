import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import PhoneFillIcon from 'remixicon-react/PhoneFillIcon';

import { DisclosureMenuLinks } from '../../../components/DisclosureMenuLinks';
import { ContactMenuNames } from '../data';

export function DisclosureMenu() {
  return (
    <>
      <DisclosureMenuLinks
        menuName={ContactMenuNames.contacts}
        links={[
          { name: "bruno_mileto@outlook.com", href: "#", icon: MailFillIcon },
          { name: "+5562992861675", href: "#", icon: PhoneFillIcon },
        ]}
      />
      <DisclosureMenuLinks
        menuName={ContactMenuNames.findMeAlso}
        links={[
          {
            name: "Instagram account",
            href: "https://instagram.com/bruno_mileto",
            icon: ExternalLinkFillIcon,
          },
          {
            name: "WhatsApp",
            href: "https://api.whatsapp.com/send?phone=+5562992861675&text=sua%20mensagem",
            icon: ExternalLinkFillIcon,
          },
        ]}
      />
    </>
  );
}
