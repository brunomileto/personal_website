import { CodeSnippetSection } from "./CodeSnippetSection";
import { ContactForm } from "./ContactForm";

export function Content() {
  return (
    <div
      id="content"
      className="mt-9 md:mt-0  md:text-sm  px-7 md:px-0 flex flex-col 
                 md:flex-row gap-9 md:gap-0 md:w-full"
    >
      <ContactForm />
      <CodeSnippetSection />
    </div>
  );
}
