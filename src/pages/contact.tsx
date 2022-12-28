import { format } from 'date-fns';
import enUs from 'date-fns/locale/en-US';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import PhoneFillIcon from 'remixicon-react/PhoneFillIcon';

import { ContactForm } from '../components/ContatctForm';
import { DisclosureMenuLinks } from '../components/DisclosureMenuLinks';
import { useLocale } from '../context/LocaleContext';

export enum ContactMenuNames {
  contacts = "contacts",
  findMeAlso = "find_me_also_in",
}

interface NameProps {
  name: string;
}

interface ParentesisProps {
  isToRight?: boolean;
}

function VariableNameSpan({ name }: NameProps) {
  return <span className="text-accent-waterGreenShinny">{name}</span>;
}

function ConstSpan() {
  return <span className="text-accent-lilac">const </span>;
}

function EqualsSignSpan() {
  return <span className="text-accent-lilac"> = </span>;
}

function FunctionSpan({ name }: NameProps) {
  return <span className="text-secondary-blue">{name}</span>;
}

function BracketsFunctionSpan({ isToRight = false }: ParentesisProps) {
  return <span className="text-accent-redOrange">{isToRight ? "{" : "}"}</span>;
}

function ParentesisFunctionSpan({ isToRight = false }: ParentesisProps) {
  return <span className="text-accent-redOrange">{isToRight ? "(" : ")"}</span>;
}

function FunctionParamSpan({ name }: NameProps) {
  return <span className="text-accent-orange">{name}</span>;
}

function SymbolsSpan({ name }: NameProps) {
  return <span className="text-accent-lilac">{name}</span>;
}

const Contact = () => {
  const { locale } = useLocale();
  const [selectedMenuName, setSelectedMenuName] = useState<ContactMenuNames>(ContactMenuNames.contacts);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function handleFormDataChange(changedName: string, changedEmail: string, changedMessage: string) {
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
      className="w-full h-full flex flex-col md:flex-row justify-start 
                 md:overflow-hidden overflow-scroll mb-0 "
    >
      <div id="title" className="px-7 pt-6 pb-8 md:hidden">
        <span className="text-secondary-white">_contacts</span>
      </div>
      <div
        id="lateralMenu"
        className="flex flex-col gap-2 md:gap-0 relative md:w-[calc(40000vw/1920+1px)] 
                lg:w-[calc(31100vw/1920)] md:border-r-1 md:border-lines 
                md:flex-shrink-0 md:overflow-x-hidden"
      >
        <DisclosureMenuLinks
          menuName={ContactMenuNames.contacts}
          links={[
            { name: "bruno_mileto@outlook.com", href: "#", icon: MailFillIcon },
            { name: "+5562992861675", href: "#", icon: PhoneFillIcon },
          ]}
        />
        <DisclosureMenuLinks
          menuName={ContactMenuNames.findMeAlso}
          links={[
            {
              name: "Instagram account",
              href: "https://instagram.com/bruno_mileto",
              icon: ExternalLinkFillIcon,
            },
            {
              name: "WhatsApp",
              href: "https://api.whatsapp.com/send?phone=+5562992861675&text=sua%20mensagem",
              icon: ExternalLinkFillIcon,
            },
          ]}
        />
      </div>
      <div
        id="content"
        className="mt-9 md:mt-0  md:text-sm  px-7 md:px-0 flex flex-col 
                 md:flex-row gap-9 md:gap-0 md:w-full"
      >
        <ContactForm name={name} email={email} message={message} handleFormDataChange={handleFormDataChange} />
        <section
          id="code-snippet"
          className="hidden md:flex md:flex-col md:gap-0 md:border-l-1 md:border-lines 
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
            className="flex justify-center items-center h-full md:px-2 md:text-xs 
                        lg:px-4 lg:text-sm xl:px-8 xl:text-base break-words"
          >
            <div className="max-w-[570px]">
              <div>
                <ConstSpan /> <VariableNameSpan name="button" />
                <EqualsSignSpan />
                <div className="inline">
                  <FunctionSpan name="document.querySelector" />
                  <ParentesisFunctionSpan isToRight />
                </div>
                <FunctionParamSpan name='"#sendBtn"' />
                <ParentesisFunctionSpan />
                <SymbolsSpan name=";" />
              </div>
              <br />
              <div>
                <div>
                  <ConstSpan />
                  <VariableNameSpan name="message" />
                  <EqualsSignSpan />
                  <BracketsFunctionSpan isToRight />
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;
                  <VariableNameSpan name="name" />
                  <SymbolsSpan name=":" /> &nbsp;
                  <FunctionParamSpan name={`"${name}"`} />
                  <SymbolsSpan name="," />
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;
                  <VariableNameSpan name="email" />
                  <SymbolsSpan name=":" /> &nbsp;
                  <FunctionParamSpan name={`"${email}"`} />
                  <SymbolsSpan name="," />
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;
                  <VariableNameSpan name="message" />
                  <SymbolsSpan name=":" /> &nbsp;
                  <FunctionParamSpan name={`"${message}"`} />
                  <SymbolsSpan name="," />
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;
                  <VariableNameSpan name="date" />
                  <SymbolsSpan name=":" /> &nbsp;
                  <FunctionParamSpan
                    name={`"${format(new Date(), "PP", { locale: locale === "pt_BR" ? ptBR : enUs })}"`}
                  />
                  <SymbolsSpan name="," />
                </div>
                <div>
                  <BracketsFunctionSpan />
                  <SymbolsSpan name=";" />
                </div>
              </div>
              <br />
              <div>
                <div>
                  <FunctionSpan name="button.addEventListener" />
                  <ParentesisFunctionSpan isToRight />
                  <FunctionParamSpan name='"click"' />
                  <SymbolsSpan name="," />
                  &nbsp;
                  <ParentesisFunctionSpan isToRight />
                  <ParentesisFunctionSpan />
                  &nbsp;
                  <SymbolsSpan name="=>" />
                  &nbsp;
                  <BracketsFunctionSpan isToRight />
                </div>
                <div>
                  &nbsp; &nbsp; &nbsp;
                  <FunctionSpan name="form.send" />
                  <ParentesisFunctionSpan isToRight />
                  <VariableNameSpan name="message" />
                  <ParentesisFunctionSpan />
                  <SymbolsSpan name=";" />
                </div>
                <div>
                  <BracketsFunctionSpan />
                  <ParentesisFunctionSpan />
                  <SymbolsSpan name=";" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
