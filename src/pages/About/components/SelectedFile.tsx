import CloseFillIcon from 'remixicon-react/CloseFillIcon';

import { AboutMenuNames, AboutSubMenuNames, SubMenuItens } from '../data';

interface Props {
  selectedMenuName: AboutMenuNames;
  selectedSubMenuName: AboutSubMenuNames;
  selectedSubMenuItens: SubMenuItens | undefined;
}

export function SelectedFile({
  selectedMenuName,
  selectedSubMenuName,
  selectedSubMenuItens,
}: Props) {
  return (
    <section className="flex flex-col gap-4 md:gap-0 md:w-3/4 max-w-[700px] ">
      <header
        id="content-header"
        className="md:flex  md:flex-row md:gap-3 md:border-b-1 
                 md:border-lines md:pl-2  md:w-full md:items-center "
      >
        <span className="text-secondary-sky md:hidden">
          \ {selectedMenuName}
        </span>
        <span className="text-secondary-sky md:hidden">
          {" "}
          \ {selectedSubMenuName}
        </span>
        <span className="text-secondary-white md:py-2">
          {" "}
          \ {selectedSubMenuItens?.name}
        </span>
        <div
          className="hidden md:inline cursor-pointer ml-6 pr-4 border-r-1 
                        h-full border-lines md:py-2"
        >
          <CloseFillIcon size={20} className="" />
        </div>
      </header>
      <div
        className="md:overflow-scroll md:h-full md:pt-0 md:scrollbar 
                    md:scrollbar-thumb-secondary-sky pb-6 md:pb-0"
      >
        <div className="h-full md:mr-4  md:pt-4 md:border-r-1 md:border-lines">
          <p
            className="text-sm leading-7 md:px-4 break-words md:border-r-0
                      md:border-lines md:pb-6 whitespace-pre-line"
          >
            {selectedSubMenuItens?.description}
          </p>
        </div>
      </div>
    </section>
  );
}
