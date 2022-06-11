import { ReactNode } from "react";

interface ButtonLgProps {
  children: ReactNode;
  btnType: "button" | "submit" | "reset" | undefined;
}

export const ButtonLg = ({ children, btnType }: ButtonLgProps) => {
  return (
    <button
      type={btnType}
      className=" font-DMSans font-medium text-base text-brand-white rounded-md flex flex-1 items-center justify-center  w-96 h-12 px-8 py-4 border-transparent bg-brand-primary hover:bg-brand-hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-hover"
    >
      {children}
    </button>
  );
};
