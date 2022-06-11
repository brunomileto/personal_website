import { ReactNode } from "react";
import { ArrowRight } from "phosphor-react";
interface ButtonViewMoreProps {
  children: ReactNode;
  handleClick: () => void;
}

export const ButtonViewMore = ({
  children,
  handleClick,
}: ButtonViewMoreProps) => {
  return (
    <button
      type="button"
      onClick={() => {
        handleClick();
      }}
      className="font-DMSans whitespace-nowrap font-medium text-base text-brand-grey rounded-md flex items-center justify-center  w-40 h-12 px-8 py-4 border-[1px] 
      border-brand-grey hover:text-brand-white hover:border-brand-white bg-transparent  transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-white"
    >
      {children}
      <ArrowRight size={16} weight={"bold"} className="ml-1 flex-none" />
    </button>
  );
};
