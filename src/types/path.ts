const isPortuguese =
  window.navigator.language.includes("pt") ||
  window.navigator.language.includes("br");

export const paths = {
  home: {
    id: 1,
    path: "/",
    name: isPortuguese ? "Início" : "Home",
    footerCol: 1,
    isFooterTitle: true,
  },
  about: {
    id: 2,
    path: "/about",
    name: isPortuguese ? "Sobre" : "About",
    footerCol: 1,
    isFooterTitle: false,
  },
  projects: {
    id: 3,
    path: "/projects",
    name: isPortuguese ? "Projetos" : "Projects",
    footerCol: 1,
    isFooterTitle: false,
  },
  contact: {
    id: 4,
    path: "/contact",
    name: isPortuguese ? "Contato" : "Contact",
    footerCol: 2,
    isFooterTitle: true,
  },
  project: {
    id: 5,
    path: "/project/:id",
    name: "",
    footerCol: 1,
    isFooterTitle: false,
  },
};
