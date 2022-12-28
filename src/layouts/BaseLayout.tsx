import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { BaseHead } from '../components/BaseHead';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { usePages } from '../context/PageNamesContext';

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  const router = useRouter();
  const { pages } = usePages();
  const isHomePage = router.pathname === pages.home.path;
  return (
    <>
      <BaseHead />
      <div
        id="defaultLayout"
        className={`flex flex-col justify-between w-full h-[calc(100vh-75px)]
        md:h-[calc(100vh-35px)] rounded-lg border-1 border-lines
        bg-primary-marine md:bg-right-top bg-cover md:bg-contain font-sans 
        text-labels text-secondary-sky box-border overflow-hidden
        ${isHomePage && "bg-hero bg-no-repeat bg-left"} `}
      >
        <Header />
        <main className="w-full h-full overflow-hidden">{children}</main>
        <Footer />
      </div>
    </>
  );
}
