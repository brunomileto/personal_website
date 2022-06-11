import { DownloadSimple } from "phosphor-react";
import { ReactNode } from "react";
import cv from "../../assets/files/Curriculo_ptBr_v001.pdf";

interface ButtonDownloadProps {
  children: ReactNode;
}

export const ButtonDownload = ({ children }: ButtonDownloadProps) => {
  const downloadCV = () => {
    window.open(cv, "_blank");
  };
  return (
    <button
      onClick={downloadCV}
      type="button"
      className="font-DMSans whitespace-nowrap font-medium text-base text-brand-grey rounded-md flex items-center justify-center  w-40 h-12 px-6 py-4 border-[1px] 
      border-brand-grey hover:text-brand-white hover:border-brand-white bg-transparent  transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-white"
    >
      <DownloadSimple size={19} className="flex-none mr-2" />
      {children}
    </button>
  );
};
