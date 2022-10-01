import { DisclosureMenu } from './DisclosureMenu';

interface Props {
  handleSelectedMenu: (name: string) => void;
}

export function LateralMenu({ handleSelectedMenu }: Props) {
  return (
    <div
      id="aboutDisclosure"
      className="flex flex-col gap-2 md:gap-0 relative md:w-[calc(40000vw/1920+1px)] 
                lg:w-[calc(31100vw/1920)] md:border-r-1 md:border-lines 
                md:flex-shrink-0 md:overflow-x-hidden"
    >
      <DisclosureMenu handleSubMenuItemClick={handleSelectedMenu} />
    </div>
  );
}
