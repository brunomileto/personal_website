import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export function SocialLinks() {
  return (
    <div className="hidden lg:block md:fixed bottom-0">
      <div className="flex flex-col text-white/70  gap-6 items-center">
        <a>
          <GithubLogo size={30} className="hover:text-accent" />
        </a>
        <a>
          <InstagramLogo size={30} className="hover:text-accent" />
        </a>
        <a>
          <LinkedinLogo size={30} className="hover:text-accent" />
        </a>
        <div className="h-[100px] w-[2px] bg-white/70"></div>
      </div>
    </div>
  );
}
