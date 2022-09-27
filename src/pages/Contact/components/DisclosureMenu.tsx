import MailFillIcon from "remixicon-react/MailFillIcon";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";
import ExternalLinkFillIcon from "remixicon-react/ExternalLinkFillIcon";

import { ContactMenuNames } from "../data";
import { DisclosureMenuLinks } from "../../../components/DisclosureMenuLinks";

export function DisclosureMenu() {
  return (
    <>
      <DisclosureMenuLinks
        menuName={ContactMenuNames.contacts}
        links={[
          { name: "brunomileto@outlook.com", href: "#", icon: MailFillIcon },
          { name: "+5562992861675", href: "#", icon: PhoneFillIcon },
        ]}
      />
      <DisclosureMenuLinks
        menuName={ContactMenuNames.findMeAlso}
        links={[
          { name: "Instagram account", href: "#", icon: ExternalLinkFillIcon },
          { name: "Youtube channel", href: "#", icon: ExternalLinkFillIcon },
          { name: "Twich profile", href: "#", icon: ExternalLinkFillIcon },
          { name: "Blog", href: "#", icon: ExternalLinkFillIcon },
        ]}
      />
    </>
  );
}
