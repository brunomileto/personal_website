import { useState } from 'react';

import { CodeSnippetSection } from './CodeSnippetSection';
import { ContactForm } from './ContactForm';

export function Content() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function handleFormDataChange(
    changedName: string,
    changedEmail: string,
    changedMessage: string
  ) {
    console.log(changedName);
    if (changedName !== name) {
      setName(changedName);
    }
    if (changedEmail !== name) {
      setEmail(changedEmail);
    }
    if (changedMessage !== name) {
      setMessage(changedMessage);
    }
  }

  return (
    <div
      id="content"
      className="mt-9 md:mt-0  md:text-sm  px-7 md:px-0 flex flex-col 
                 md:flex-row gap-9 md:gap-0 md:w-full"
    >
      <ContactForm
        name={name}
        email={email}
        message={message}
        handleFormDataChange={handleFormDataChange}
      />
      <CodeSnippetSection name={name} email={email} message={message} />
    </div>
  );
}
