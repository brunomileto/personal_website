import personalImg from "../assets/jpg/personal.jpg";
import { SkillsCard } from "../components/SkillsCard";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import {
  DeviceMobile,
  Code,
  UserPlus,
  ChatDots,
  Layout,
  Tabs,
  IconWeight,
} from "phosphor-react";
import { appColors } from "../types/colors";

export interface Skill {
  icon: ReactNode;
  title: string;
  description: string;
}

const iconProps = { size: 50, color: appColors.grey };

const skills: Skill[] = [
  {
    icon: <DeviceMobile size={iconProps.size} color={iconProps.color} />,
    title: "Frontend",
    description:
      "Possuo experiência profissional em desenvolvimento de websites, utilizando ReactJS e o combo HTML/CSS/Javascript e também com cursos e conhecimentos básicos de design e Ui-Ux",
  },
  {
    icon: <Code size={iconProps.size} color={iconProps.color} />,
    title: "Backend",
    description:
      "Sólidos conhecimentos de python, javascript/NodeJS e C#, para desenvolvimento de aplicações backend como automação de compra e venda de bitcoins, automação de sistema de apostas esportivas, gestão de horas de projetos/atividades",
  },
  {
    icon: <UserPlus size={iconProps.size} color={iconProps.color} />,
    title: "Cooworking",
    description:
      "Trabalho muito bem em grupo. Tenho um perfil integrador, tentando sempre a aproximação do time para evolução individual e, consequentemente, um melhor desenvolvimento e uma melhor entrega das atividades.",
  },
  {
    icon: <ChatDots size={iconProps.size} color={iconProps.color} />,
    title: "Comunicação",
    description:
      "Desde novo, sempre foquei em melhor minha comunicação e também liderança já que a comunicação é a principal ferramenta de um líder. Tenho cursos renomados na área e com alguns anos de experiência trabalhando diretamente com meus clientes.",
  },
  {
    icon: <Layout size={iconProps.size} color={iconProps.color} />,
    title: "Criatividade",
    description:
      "Criatividade para resolver problemas é uma habilidade tenho e que sempre procuro desenvolver, principalmente, escutando outras pessoas e estudando/aprendendo novos conceitos. Além disso, é um dos pontos que mais me motiva a ser DEV.",
  },
  {
    icon: <Tabs size={iconProps.size} color={iconProps.color} />,
    title: "Visão do Todo",
    description:
      "Considero uma das principais soft skills de um dev. Entender o todo, entender o contexto do projeto que está sendo desenvolvido é um dos principais pontos que determinará o sucesso do projeto. Com esse entendimento, procuro sempre compreender o todo o processo, para entregar a melhor solução possível",
  },
];

export const About = () => {
  console.log(window.navigator.language);
  return (
    <main>
      <section
        id="main"
        className="full flex justify-center items-center pt-16 pb-32 px-36"
      >
        <div className="flex justify-between h-[34.19rem] max-w-6xl gap-36">
          <img
            className="rounded-lg max-w-md "
            src={personalImg}
            alt="Imagem de Bruno Mileto"
          />
          <div className="max-w-[35.5rem]">
            <h1 className="font-bold text-6xl mb-6">Bruno Mileto</h1>
            <p className="text-base font-normal">
              FullStack Developer, com 2+ anos experiência. Atualmente
              trabalhando com C#/ASP.NET e ReactJs.
            </p>
            &nbsp;
            <p className="text-base font-normal">
              Fui apresentado ao mundo Dev, por um professor durante minha
              graduação de Engenharia Mecânica. Cheguei a trabalhar como
              engenheiro mecânico mas, decidi mudar de carreira, me tornando
              Dev.
            </p>
            &nbsp;
            <p className="text-base font-normal">
              Iniciei estudando e fazendo projetos com Python e Django e com
              isso consegui meu primeiro emprego, utilizando Delphi e
              C#/ASP.Net, para desenvolvimento e suporte de um sistema legado de
              gestão de empresas.
            </p>
            &nbsp;
            <p className="text-base font-normal">
              Posteriormente, consegui um emprego em minha atual empresa,
              desenvolvendo projetos para os clientes como Ambev, Vale,
              Santander, etc. Atuo desde o planejamento, passando pelo
              desenvolvimento, testes e implantação em produção, utilizando C#
              ASP.NET e Javascript.
            </p>
            &nbsp;
            <p className="text-base font-normal">
              Por fim, também realizo trabalhos freelancer de desenvolvimento
              web, landing pages e SPAs, com HTML/CSS/Javascript puros,
              bootstrap e recentemente, ReactJs.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-32 flex flex-col justify-center items-center">
        <h1 className="font-medium text-4xl mb-16">Minhas Habilidades</h1>
        <div className="flex justify-center items-center">
          <SkillsCard skills={skills} />
        </div>
      </section>
    </main>
  );
};
