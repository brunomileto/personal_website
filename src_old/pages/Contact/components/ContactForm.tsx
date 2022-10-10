import React, { useRef, useState } from 'react';
import CloseFillIcon from 'remixicon-react/CloseFillIcon';

import emailjs from '@emailjs/browser';

import { Spinner } from '../../../components/Spinner';

interface Props {
  name: string;
  email: string;
  message: string;
  handleFormDataChange: (name: string, email: string, message: string) => void;
}

export function ContactForm({
  email,
  message,
  name,
  handleFormDataChange,
}: Props) {
  const form = useRef<HTMLFormElement>(null);
  const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);
  const [emailSended, setEmailSended] = useState<boolean>(false);
  const [emailSendedError, setEmailSendedError] = useState<boolean>(false);
  const [isSubmitFormButtonDisabled, setSubmitFormButtonDisabled] =
    useState<boolean>(true);

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    setIsSendingEmail(true);
    const emailJsServiceKey = import.meta.env.VITE_EMAILJS_SERVICE_KEY;
    const emailJsTemplateKey = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;
    const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(
        emailJsServiceKey,
        emailJsTemplateKey,
        form.current!,
        emailJsPublicKey
      )
      .then(
        (result) => {
          console.log(result);
          setIsSendingEmail(false);
          setEmailSended(true);
          handleFormDataChange("", "", "");
        },
        (error) => {
          console.log(error);
          setEmailSended(false);
          handleFormDataChange("", "", "");
        }
      );
  }

  function handleSubmitFormButtonState(
    name: string,
    email: string,
    message: string
  ) {
    setSubmitFormButtonDisabled(name === "" || email === "" || message === "");
  }

  return (
    <section className="flex flex-col gap-2 md:gap-0 md:w-3/4 lg:w-4/5 pb-6">
      <header
        id="content-header"
        className="hidden md:flex  md:flex-row md:gap-3 md:border-b-1 
                 md:border-lines md:pl-2  md:w-full md:items-center "
      >
        <span className="text-secondary-white md:py-2"> \ {"contacts"}</span>
        <div
          className="hidden md:inline cursor-pointer ml-6 pr-4 border-r-1 
                        h-full border-lines md:py-2"
        >
          <CloseFillIcon size={20} className="" />
        </div>
      </header>
      <div
        className="md:flex md:flex-col md:items-center md:justify-center 
                      md:h-full  "
      >
        <div
          className="md:w-full md:h-full md:flex md:justify-center 
                        md:items-center"
        >
          {isSendingEmail ? (
            <Spinner />
          ) : emailSended ? (
            <div
              id="ThanksWrapper"
              className="flex flex-col items-center w-full gap-6 mt-4"
            >
              <div className="">
                <span className="text-secondary-white text-3xl">
                  Thank you! 🤘
                </span>
              </div>
              <div className="w-full flex justify-center">
                <span className="text-center">
                  Your message has been accepted. You will recieve answer really
                  soon!
                </span>
              </div>
              <div>
                <button
                  onClick={() => setEmailSended(false)}
                  className="px-5 py-3 rounded-lg bg-lines text-secondary-white"
                >
                  send_new_message
                </button>
              </div>
            </div>
          ) : (
            <form
              ref={form}
              onSubmit={(e) => {
                setSubmitFormButtonDisabled(true);
                sendEmail(e);
              }}
              className="text-sm leading-7 md:px-4 flex flex-col gap-6 md:w-full md:max-w-md"
            >
              <div id="name_wrapper" className="flex flex-col w-full gap-3">
                <label htmlFor="name">_name:</label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => {
                    handleSubmitFormButtonState(e.target.value, email, message);
                    handleFormDataChange(e.target.value, email, message);
                  }}
                  name="name"
                  className="border-1 px-3 border-lines rounded-lg h-10 
                         bg-primary-darkMarine"
                />
              </div>
              <div id="email_wrapper" className="flex flex-col w-full gap-3">
                <label htmlFor="email">_email:</label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => {
                    handleSubmitFormButtonState(name, e.target.value, message);
                    handleFormDataChange(name, e.target.value, message);
                  }}
                  name="email"
                  className="border-1 px-3 border-lines rounded-lg h-10 
                         bg-primary-darkMarine"
                />
              </div>
              <div id="message_wrapper" className="flex flex-col w-full gap-3">
                <label htmlFor="message">_message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => {
                    handleSubmitFormButtonState(name, email, e.target.value);
                    handleFormDataChange(name, email, e.target.value);
                  }}
                  name="message"
                  className=" border-1 px-3 border-lines rounded-lg h-36 
                         bg-primary-darkMarine overflow-scroll scrollbar-thin"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitFormButtonDisabled}
                  className="px-3 py-[5px] bg-lines rounded-md text-secondary-white
                           disabled:text-secondary-white/40"
                >
                  submit_message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
