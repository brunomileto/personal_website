import { ReactNode, createContext, useContext } from 'react';

import { useRouter } from 'next/router';

interface LocaleContextType {
  locale: string;
}

interface LocaleContextProviderProps {
  children: ReactNode;
}

export const LocaleContext = createContext({} as LocaleContextType);

export function LocaleContextProvider({ children }: LocaleContextProviderProps) {
  const router = useRouter();
  const language = router.locale;
  const locale = language === "pt-BR" ? "pt_BR" : !language ? "en" : language;

  return <LocaleContext.Provider value={{ locale }}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => {
  const { locale } = useContext(LocaleContext);
  const isPtBr = locale === "pt_BR";

  return { locale, isPtBr };
};
