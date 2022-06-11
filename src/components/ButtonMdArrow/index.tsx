import { ReactNode } from "react";
import arrowRightImg from "../../assets/svg/arrowRight.svg";
interface ButtonMdArrowProps {
  children: ReactNode;
  handleClick: () => void;
}

export const ButtonMdArrow = ({
  children,
  handleClick,
}: ButtonMdArrowProps) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className=" font-DMSans font-medium text-base text-brand-white rounded-md flex flex-1 items-center justify-center  w-72 h-12 px-8 py-4 border-transparent bg-brand-primary hover:bg-brand-hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-hover"
    >
      {children}
      <img
        className="ml-3 w-3 h-3"
        src={arrowRightImg}
        alt="Seta para direita"
      />
    </button>
  );
};
