import {
  GithubLogo,
  IconProps,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { paths } from "../../types/path";

type PhosphorIconComponent = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;

export type LinkType = {
  id: number;
  name: string;
  path: string;
  footerCol: number;
  isFooterTitle: boolean;
  imgComponents?: ("instagram" | "linkedin" | "github")[];
};

type IconsObjectType = {
  instagram: { name: string; icon: PhosphorIconComponent; href: string };
  linkedin: { name: string; icon: PhosphorIconComponent; href: string };
  github: { name: string; icon: PhosphorIconComponent; href: string };
};

const IconsObject: IconsObjectType = {
  instagram: {
    name: "instagram",
    icon: InstagramLogo,
    href: "https://instagram.com/bruno_mileto",
  },
  linkedin: {
    name: "linkedin",
    icon: LinkedinLogo,
    href: "https://linkedin.com/in/bruno-mileto",
  },
  github: {
    name: "github",
    icon: GithubLogo,
    href: "https://github.com/brunomileto",
  },
};

const footerCols = [1, 2, 3];
const links: LinkType[] = [
  ...Object.entries(paths).map((pathList) => pathList[1]),
  {
    id: 5,
    name: "Email",
    path: paths.contact.path,
    footerCol: 2,
    isFooterTitle: false,
  },
  {
    id: 6,
    name: "LinkedIn",
    path: "https://linkedin/in/bruno_mileto",
    footerCol: 2,
    isFooterTitle: false,
  },
  {
    id: 7,
    name: "Social",
    path: "#",
    footerCol: 3,
    isFooterTitle: true,
  },
  {
    id: 8,
    name: "",
    path: "#",
    footerCol: 3,
    isFooterTitle: true,
    imgComponents: ["github", "linkedin", "instagram"],
  },
];

export const Footer = () => {
  return (
    <footer className="w-full mb-5  relative flex flex-col justify-start items-center h-80 px-5">
      <div className="max-w-6xl w-[72rem] grid grid-cols-5 mb-16 border-t-2 border-brand-border pt-16">
        <div className="h-8  ">
          <a className="cursor-pointer h-full flex flex-row justify-start items-end">
            <h1 className="font-Poppins text-lg group">
              brunomileto
              <span className="text-brand-primary group-hover:motion-safe:animate-pulse text-3xl">
                .
              </span>
            </h1>
          </a>
        </div>
        {footerCols.map((col) => {
          var thisColLinks = links.filter((link) => link.footerCol === col);
          return (
            <div key={col} id={col.toString()} className=" ">
              {thisColLinks.map((link) => {
                if (link.imgComponents) {
                  return (
                    <div
                      key={`${link.id}+${link.name}`}
                      className="mb-6 last:mb-0 h-8 flex justify-start items-center text-base font-medium"
                    >
                      {link.imgComponents.map(
                        (iconObjKey: "instagram" | "linkedin" | "github") => {
                          const Icon = IconsObject[iconObjKey].icon;
                          return (
                            <a
                              rel="noopener noreferrer"
                              target="_blank"
                              key={iconObjKey}
                              className={`cursor-pointer mr-4`}
                              href={IconsObject[iconObjKey].href}
                            >
                              <Icon
                                className="text-brand-grey transition-colors hover:text-brand-white"
                                size={42}
                              />
                            </a>
                          );
                        }
                      )}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={link.id}
                      className="mb-6 last:mb-0 h-8 flex justify-start items-center text-base font-medium"
                    >
                      <a
                        className={`cursor-pointer ${
                          link.isFooterTitle && "text-brand-accent"
                        }`}
                        href={link.path}
                      >
                        {link.name}
                      </a>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
      <div className="max-w-6xl w-[72rem] border-t-2 border-brand-border mb-16 pt-4">
        <p className="text-xs font-normal text-brand-grey">
          © 2022 Bruno Mileto{" "}
        </p>
      </div>
    </footer>
  );
};
