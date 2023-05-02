import { gql } from '@apollo/client';

export enum Language {
  ptBR = "pt_BR",
  enUS = "en",
}

export const GET_ALL_PROJECTS_SIMPLE_QUERY = gql`
  # query AllProjectsShort($locales: [Locale!] = [language]) {
  query AllProjectsShort($locales: [Locale!]!) {
    projects(locales: $locales) {
      id
      shortname
      shortDescription
      slug
      externalUrl
      githubUrl
      projectTypes
      coverPicture {
        url
      }
    }
  }
`;

export const GET_SITE_PAGE_NAMES_QUERY = gql`
  # query PageNames($locales: [Locale!] = [language]) {
  query Pages($locales: [Locale!]!) {
    pages(locales: $locales) {
      name
      path
      locale
    }
  }
`;

export const GET_ABOUT_MENU = gql`
  query AboutMenus($locales: [Locale!]!) {
    aboutMenus(locales: $locales) {
      name
      aboutMenuType
      aboutSubMenus {
        name
        aboutSubMenuType
        aboutSubMenuItems {
          name
          description {
            text
          }
        }
      }
    }
  }
`;
