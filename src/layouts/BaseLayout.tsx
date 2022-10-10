import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { BaseHead } from '../components/BaseHead';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { pages } from '../utils/pages';

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  const router = useRouter();
  const isHomePage = router.pathname === pages.home.path;
  return (
    <div
      id="defaultLayout"
      className={`flex flex-col justify-between w-full h-[calc(100vh-75px)] 
      md:h-[calc(100vh-35px)] rounded-lg border-1 border-lines 
      bg-primary-marine  
      ${
        isHomePage && "bg-hero bg-no-repeat bg-left"
      } md:bg-right-top bg-cover md:bg-contain`}
    >
      <BaseHead />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
