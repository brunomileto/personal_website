import { CodeSnippet } from '../../../../components/CodeSnippet';
import { AboutCodeSnippetWrapper } from './components/AboutCodeSnippetWrapper';

export function CodeSnippetSection() {
  return (
    <section
      id="code-snippet"
      className="flex flex-col gap-7 md:gap-0 md:border-l-1 md:border-lines 
                  md:w-full"
    >
      <div
        id="hidden"
        className="hidden md:flex  md:flex-row md:gap-3 md:border-b-1 
                 md:border-lines md:pl-2  md:w-full md:items-center"
      >
        <span
          className="hidden md:inline cursor-pointer ml-6 pr-4 
                        h-full border-lines md:py-2 text-transparent"
        >
          _
        </span>
      </div>
      <div
        className="md:overflow-y-scroll  md:scrollbar 
                    md:scrollbar-thumb-secondary-sky"
      >
        <div
          className="md:h-full  md:min-h-full md:pt-7 md:mr-4 md:border-lines
                        "
        >
          <header className="md:border-r-1 md:border-lines">
            <span className="text-secondary-white md:text-secondary-sky md:px-10">
              // Code snippet showcase:{" "}
            </span>
          </header>
          <AboutCodeSnippetWrapper />
        </div>
      </div>
    </section>
  );
}
