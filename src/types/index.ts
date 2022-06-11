// Navbar types
export type navBarItemType = { id: number; name: string; href: string };
export type navBarType = {
  home: navBarItemType;
  about: navBarItemType;
  projects: navBarItemType;
  contact: navBarItemType;
};

// Footer types

export type LinkType = {
  id: number;
  name: string;
  path: string;
  footerCol: number;
  isFooterTitle: boolean;
  imgComponents?: ("instagram" | "linkedin" | "github")[];
};
// ---------------------
// Component types

// Header
export type headerDataType = {
  title: string;
  navbar: navBarType;
};

export type footerDataType = { title: string; links: LinkType[] };

// ---------------------
// Page types

// Home
export type homeDataType = {
  sections: {
    heroSection: {
      title: string[];
      paragraph: string[];
      buttonProjects: string;
      buttonCV: string;
    };
    aboutSection: {
      sectionTitle: string;
      title: string;
      paragraph: string[];
      button: string;
    };
    projectsSection: {
      sectionTitle: string;
      button: string;
    };
  };
};

// About

// ---------------------
// Site Data Types

export type siteDataType = {
  header: { ptBr: headerDataType; enUs: headerDataType };
  home: { ptBr: homeDataType; enUs: homeDataType };
  footer: { ptBr: footerDataType; enUs: footerDataType };
};
