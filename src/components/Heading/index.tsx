import { HamburgerView } from "./components/HamburgerView";
import { HeadingNavItems } from "./components/HeadingNavItems";

export function Heading() {
  return (
    <header className="flex justify-between items-center py-12 w-full">
      <img src="/logo.svg" />
      <HamburgerView />
      <HeadingNavItems />
    </header>
  );
}
