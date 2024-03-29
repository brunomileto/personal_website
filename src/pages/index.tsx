import type { NextPage } from "next";
import { useRouter } from 'next/router';

import { CodeSnippet } from '../components/CodeSnippet';
import { SnippetsSwiper } from '../components/SnippetSwiper';
import { useLocale } from '../context/LocaleContext';

const Home: NextPage = () => {
  const { isPtBr } = useLocale();
  return (
    <section
      className="w-full h-[calc(100vh-200px)] flex justify-center 
      gap-[calc(8000vw/1920)] md:px-[8vw] xl:px-[16.198vw] overflow-hidden"
    >
      <div
        className="flex flex-col justify-between md:justify-start  
                      md:gap-[calc(8100vw/1920)] h-full px-4 
                      pt-24 md:pt-36 pb-20 w-full"
      >
        <div className="flex flex-col">
          <span className="font-extralight text-[#E5E9F0] text-bodyText 2xl:text-subHeadline">
            {isPtBr ? "Olá! Sou o" : "Hi all. I am"}
          </span>
          <span className="font-light text-[#E5E9F0] text-headline leading-none mt-3 mb 2xl:text-extraHeadline">
            Bruno Mileto
          </span>
          <span className="text-accent-waterGreenShinny font-light 2xl:text-bodyText">&gt; Fullstack developer</span>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-0 mb-2">
            {isPtBr ? <span>// veja meu perfil no github</span> : <span>// find my profile on github</span>}
            <a href="https://github.com/brunomileto" className="break-words" target="_blank">
              <CodeSnippet id="home-code">{'const githubLink = "https://github.com/brunomileto"'}</CodeSnippet>
            </a>
          </div>
          <div className="flex flex-col gap-0">
            {isPtBr ? <span>// veja meu CV</span> : <span>// get my CV</span>}
            <a href="/cv_en.pdf" className="break-words" target="_blank">
              <CodeSnippet id="cv_code">{`const myCvLink = "http://brunomileto.tech/cv_en.pdf"`}</CodeSnippet>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block max-w-[560px] w-[calc(90000vw/1920)] 2xl:max-w-[1020px]">
        <SnippetsSwiper />
      </div>
    </section>
  );
};

export default Home;
