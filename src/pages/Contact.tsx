import { ButtonLg } from "../components/ButtonLg";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Loading } from "../components/Loading";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const [isEmailSending, setIsEmailSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEmailSending(true);
    console.log(form.current);
    emailjs
      .sendForm(
        "service_8ueqq3k",
        "template_bz89h8s",
        form.current!,
        "Z9RG5PP3Y-liWSAa9"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Email enviado! Logo logo te retorno!");
          setIsEmailSending(false);
        },
        (error) => {
          console.log(error.text);
          setIsEmailSending(false);
        }
      );
  };

  return (
    <section className="flex justify-center items-center px-48 py-16">
      <main className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mb-11">
          <h1 className="text-6xl font-bold mb-4">Vamos Conversar!</h1>
          <p className="text-base font-medium">
            Se está interessado em meu trabalho ou quer apenas conversar, basta
            me escrever!
          </p>
        </div>
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-[27.94rem] p-6 bg-brand-border rounded-lg flex flex-col justify-start items-center gap-6 "
          >
            <div
              id="name"
              className="flex flex-col justify-center items-start gap-2"
            >
              <h1 className="font-normal text-base">Nome</h1>
              <input
                className="w-96 h-14 rounded-lg bg-brand-fullfil border-[1px] border-brand-grey px-5 py-4"
                placeholder="Seu nome"
              ></input>
            </div>
            <div
              id="email"
              className="flex flex-col justify-center items-start gap-2"
            >
              <h1 className="font-normal text-base">Email</h1>
              <input
                className="w-96 h-14 rounded-lg bg-brand-fullfil border-[1px] border-brand-grey px-5 py-4"
                placeholder="seu-email@email.com"
              ></input>
            </div>
            <div
              id="mensagem"
              className="flex flex-col justify-center items-start gap-2"
            >
              <h1 className="font-normal text-base">Mensagem</h1>
              <textarea
                className="w-96 h-40 rounded-lg bg-brand-fullfil border-[1px] border-brand-grey px-5 py-4"
                placeholder="Escreva aqui sua mensagem ..."
              ></textarea>
            </div>
            <ButtonLg btnType="submit">
              {isEmailSending ? <Loading /> : "Enviar"}
            </ButtonLg>
          </form>
        </div>
      </main>
    </section>
  );
};
