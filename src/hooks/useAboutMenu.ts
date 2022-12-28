import { useRouter } from 'next/router';

import { useQuery } from '@apollo/client';

import { GET_ABOUT_MENU } from '../libs/apollo/apolloQueries';

export enum AboutMenuNames {
  personalInfo = "personal_info",
  contacts = "contacts",
}

export enum AboutSubMenuNames {
  bio = "bio",
  interests = "interests",
  education = "education",
}

export interface AboutSubMenuItems {
  name: string;
  description: { text: string };
}

export interface AboutSubMenus {
  name: string;
  aboutSubMenuType: AboutSubMenuNames;
  aboutSubMenuItems: AboutSubMenuItems[];
}

export interface AboutMenus {
  name: string;
  aboutMenuType: AboutMenuNames;
  aboutSubMenus: AboutSubMenus[];
}

export interface GetAboutMenusQueryResponse {
  aboutMenus: AboutMenus[];
}

export function useAboutMenu() {
  const router = useRouter();
  const language = router.locale;
  const locale = language === "pt-BR" ? "pt_BR" : language;

  // console.log("LOCALE", locale);
  const { data, loading, error } = useQuery<GetAboutMenusQueryResponse>(GET_ABOUT_MENU, {
    variables: { locales: [locale] },
  });
  // if (data) console.log("SUB MENUS", data[0]);
  // console.log("SUB MENUSERROR", loading);
  return { data, loading };
}