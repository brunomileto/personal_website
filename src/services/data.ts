import { siteDataType } from "../types";
import { paths } from "../types/path";

export const siteData: siteDataType = {
  header: {
    ptBr: {
      title: "brunomileto",
      navbar: {
        home: { id: 1, name: "Início", href: paths.home.path },
        about: { id: 2, name: "Sobre", href: paths.about.path },
        projects: { id: 3, name: "Projetos", href: paths.projects.path },
        contact: { id: 4, name: "Contato", href: paths.contact.path },
      },
    },
    enUs: {
      title: "brunomileto",
      navbar: {
        home: { id: 1, name: "Home", href: paths.home.path },
        about: { id: 2, name: "About", href: paths.about.path },
        projects: { id: 3, name: "Projects", href: paths.projects.path },
        contact: { id: 4, name: "Contact", href: paths.contact.path },
      },
    },
  },
  home: {
    ptBr: {
      sections: {
        heroSection: {
          title: ["Sou", "Bruno Mileto.", "Desenvolvedor Web Full Stack"],
          paragraph: ["E este, é meu portfolio web!"],
          buttonProjects: "Ver projetos",
          buttonCV: "Download CV",
        },
        aboutSection: {
          sectionTitle: "Sobre mim",
          title: "",
          paragraph: [
            "FullStack Developer, com 2+ anos de experiência.",
            "Engenheiro Mecânico de formação, atualmente trabalho como desenvolvedor fullstack.",
            "No frontend, trabalho com ReactJs e o combo HTML/CSS/Javascript, com auxilio do Figma como ferramenta de Design e Ui/UX.",
            "No backend, utilizo Python, NodeJS e C#/ASP.NET para criar diferentes tipos de aplicações e integrações.",
          ],
          button: "Saiba mais",
        },
        projectsSection: { sectionTitle: "Projetos", button: "Ver mais" },
      },
    },
    enUs: {
      sections: {
        heroSection: {
          title: ["I'm", "Bruno Mileto.", "Full Stack Web Developer"],
          paragraph: ["And this, is my Web Portfolio!"],
          buttonProjects: "See projects",
          buttonCV: "CV Download",
        },
        aboutSection: {
          sectionTitle: "About me",
          title: "About me",
          paragraph: [
            "FullStack Developer, with 2+ years of experience.",
            "In frontend, I use ReactJS and HTML/CSS/Javascript, alongside with Figma for design and Ui/Ux.",
            "In backend, I use Python, NodeJS and C#/ASP.Net to build different kinds of applications, apis and integrations",
          ],
          button: "Know more",
        },
        projectsSection: { sectionTitle: "Projects", button: "See more" },
      },
    },
  },
  footer: {
    ptBr: {
      title: "brunomileto",
      links: [
        ...Object.entries(paths).map((pathList) => pathList[1]),
        {
          id: 5,
          name: "Email",
          path: paths.contact.path,
          footerCol: 2,
          isFooterTitle: false,
        },
        {
          id: 6,
          name: "LinkedIn",
          path: "https://linkedin/in/bruno_mileto",
          footerCol: 2,
          isFooterTitle: false,
        },
        {
          id: 7,
          name: "Social",
          path: "#",
          footerCol: 3,
          isFooterTitle: true,
        },
        {
          id: 8,
          name: "",
          path: "#",
          footerCol: 3,
          isFooterTitle: true,
          imgComponents: ["github", "linkedin", "instagram"],
        },
      ],
    },
    enUs: {
      title: "brunomileto",
      links: [
        ...Object.entries(paths).map((pathList) => pathList[1]),
        {
          id: 5,
          name: "Email",
          path: paths.contact.path,
          footerCol: 2,
          isFooterTitle: false,
        },
        {
          id: 6,
          name: "LinkedIn",
          path: "https://linkedin/in/bruno_mileto",
          footerCol: 2,
          isFooterTitle: false,
        },
        {
          id: 7,
          name: "Social",
          path: "#",
          footerCol: 3,
          isFooterTitle: true,
        },
        {
          id: 8,
          name: "",
          path: "#",
          footerCol: 3,
          isFooterTitle: true,
          imgComponents: ["github", "linkedin", "instagram"],
        },
      ],
    },
  },
};
