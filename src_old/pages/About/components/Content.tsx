import { AboutMenuNames, AboutSubMenuNames, SubMenuItens } from '../data';
import { CodeSnippetSection } from './CodeSnippetSection';
import { SelectedFile } from './SelectedFile';

interface Props {
  selectedMenuName: AboutMenuNames;
  selectedSubMenuName: AboutSubMenuNames;
  selectedSubMenuItens: SubMenuItens | undefined;
}
export function Content({
  selectedMenuName,
  selectedSubMenuName,
  selectedSubMenuItens,
}: Props) {
  return (
    <div
      id="content"
      className="mt-9 md:mt-0  md:text-sm  px-7 md:px-0 flex flex-col 
                 md:flex-row gap-9 md:gap-0 md:w-full"
    >
      <SelectedFile
        selectedMenuName={selectedMenuName}
        selectedSubMenuName={selectedSubMenuName}
        selectedSubMenuItens={selectedSubMenuItens}
      />
      <CodeSnippetSection />
    </div>
  );
}
