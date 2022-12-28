import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_SITE_PAGE_NAMES_QUERY } from '../libs/apollo/apolloQueries';
import { useLocale } from './LocaleContext';

const paths = {};

export const basePages = {
  home: { name: "", path: "/" },
  about: { name: "", path: "/about" },
  projects: { name: "", path: "/projects" },
  contact: { name: "", path: "/contact" },
};

export interface Pages {
  home: PageNamesType;
  about: PageNamesType;
  projects: PageNamesType;
  contact: PageNamesType;
}

export interface PageNamesType {
  name: string;
  path: string;
}

interface PageNamesContextProviderType {
  children: ReactNode;
}

interface GetPageNamesQueryResponse {
  pages: PageNamesType[];
}

interface PageNamesProviderValue {
  pages: Pages;
  isLoading: boolean;
}

export const PageNamesContext = createContext({} as PageNamesProviderValue);

export function PageNamesContextProvider({ children }: PageNamesContextProviderType) {
  const { locale } = useLocale();
  const { data, loading, error } = useQuery<GetPageNamesQueryResponse>(GET_SITE_PAGE_NAMES_QUERY, {
    variables: { locales: [locale] },
  });

  if (!data) {
    return (
      <PageNamesContext.Provider value={{ pages: basePages, isLoading: loading }}>{children}</PageNamesContext.Provider>
    );
  }
  const pages: Pages = {
    home: data.pages.find((page) => page.path === basePages.home.path)!,
    about: data.pages.find((page) => page.path === basePages.about.path)!,
    contact: data.pages.find((page) => page.path === basePages.contact.path)!,
    projects: data.pages.find((page) => page.path === basePages.projects.path)!,
  };

  return <PageNamesContext.Provider value={{ pages: pages, isLoading: loading }}>{children}</PageNamesContext.Provider>;
}

export const usePages = () => {
  const context = useContext(PageNamesContext);
  return context;
};
