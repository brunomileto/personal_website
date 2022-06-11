import mainImg1 from "../assets/jpg/projects/test.jpg";
import pbdGlobalMainImg from "../assets/jpg/projects/pbdGlobal/pbd-global-main.png";
import magnifyMainImg from "../assets/jpg/projects/magnify/magnify.png";
import projectTrackerMainImg from "../assets/jpg/projects/projectTracker/projectTrackerMain.png";
import robeosMainImg from "../assets/jpg/projects/robeos/robeosMain.png";
import getFeedMainImg from "../assets/jpg/projects/getFeed/getFeedMain.png";
import dtMoneyMainImg from "../assets/jpg/projects/dtMoney/dtMoneyMain.png";
import webPortfolioMainImg from "../assets/jpg/projects/webPortfolio/webPortfolioMain.png";
import fullpagePbdGlobalImg from "../assets/jpg/projects/pbdGlobal/fullpage.png";
import fullpageMagnifyImg from "../assets/jpg/projects/magnify/fullpage.png";
import fullpageProjectTrackerImg from "../assets/jpg/projects/projectTracker/fullpage.png";
import fullpageRobeosImg from "../assets/jpg/projects/robeos/fullpage.png";
import fullpageGetFeedImg from "../assets/jpg/projects/getFeed/fullpage.png";
import fullpageWebPortfolioImg from "../assets/jpg/projects/webPortfolio/fullpage.png";
import fullpageDtMoneyImg from "../assets/jpg/projects/dtMoney/fullpage.png";

export type Project = {
  id: number;
  title: string;
  mainImg: string;
  fullImg: string;
  shortDescription: string;
  stacks: stacksType[];
  href: string;
};

type stacksType =
  | "javascript"
  | "typescript"
  | "pureWeb"
  | "reactjs"
  | "electron"
  | "python";

export const projects: Project[] = [
  {
    id: 1,
    stacks: ["typescript", "reactjs"],
    title: "Portfolio Web",
    mainImg: webPortfolioMainImg,
    fullImg: fullpageWebPortfolioImg,
    href: "#",
    shortDescription:
      "Simples website para divulgar meus trabalhos. Criado utilizando ReactJS/Typescript, TailwindCSS e HeadlessUI. É um projeto ainda em desenvolvimento.",
  },
  {
    id: 2,
    stacks: ["javascript", "electron", "reactjs"],
    title: "ProjectTracker",
    mainImg: projectTrackerMainImg,
    fullImg: fullpageProjectTrackerImg,
    href: "https://github.com/brunomileto/project-tracker-frontend",
    shortDescription:
      "ProjectTracker é um app desktop. Seu desenvolvimento surgiu de uma necessidade de possuir os registros de horas gastas em diferentes projetos que atuo em meu emprego. Foi desenvolvido utilizando ReactJS/Javascript, Electron, StyledComponents e Firebase. Em fase final de desenvolvimento, mas já possível de ser utilizado. ",
  },
  {
    id: 3,
    stacks: ["pureWeb"],
    title: "PBD Global",
    mainImg: pbdGlobalMainImg,
    fullImg: fullpagePbdGlobalImg,
    href: "https://pbd.global",
    shortDescription:
      "Website criado a partir de um job freelancer. Foi construído basicamente com HTML/CSS/Javascript 'puros', ou seja, sem auxílio de frameworks. Projeto já finalizado!",
  },
  {
    id: 4,
    stacks: ["pureWeb"],
    title: "Magnify",
    mainImg: magnifyMainImg,
    fullImg: fullpageMagnifyImg,
    href: "https://www.magnify-ebp.com/",
    shortDescription:
      "Website criado a partir de um job freelancer. Foi construído basicamente com HTML/CSS/Javascript 'puros', ou seja, sem auxílio de frameworks. Projeto já finalizado!",
  },
  {
    id: 5,
    stacks: ["pureWeb"],
    title: "Robeos",
    mainImg: robeosMainImg,
    fullImg: fullpageRobeosImg,
    href: "https://www.robeos.com/",
    shortDescription:
      "Website criado a partir de um job freelancer. Foi construído basicamente com HTML/CSS/Javascript 'puros', ou seja, sem auxílio de frameworks. Projeto já finalizado!",
  },
  {
    id: 6,
    stacks: ["typescript", "reactjs"],
    title: "GetFeed",
    mainImg: getFeedMainImg,
    fullImg: fullpageGetFeedImg,
    href: "https://feed-get-five.vercel.app/",
    shortDescription:
      "Widget para obter feedbacks do usuário, com a possibilidade de enviar um print da tela, permitindo uma maior clareza das informações. Construído utilizando ReactJS/Typescript, TailwindCSS e Prisma",
  },
  {
    id: 7,
    stacks: ["typescript", "reactjs"],
    title: "dt.Money",
    mainImg: dtMoneyMainImg,
    fullImg: fullpageDtMoneyImg,
    href: "https://github.com/brunomileto/dt.money",
    shortDescription:
      "Este web app é uma alternativa simples para gestão de finanças. Permite o cadastro de entradas, saídas e a organização das mesmas em categorias. Criado utilizando ReactJS/Typescript, Styled Components e MirageJS",
  },
];
