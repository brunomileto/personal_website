import axios from 'axios';
import { useEffect, useState } from 'react';

import userImg from '../../../../../assets/userImg.png';
import { CodeSnippet } from '../../../../../components/CodeSnippet';
import { useCodeSnippets } from '../../../../../contexts/CodesContext';

export function AboutCodeSnippetWrapper() {
  const codeSnippetsData = useCodeSnippets();
  return (
    <div
      id="code-snippet-content"
      className="flex flex-col gap-12 md:gap-0 md:h-full md:pl-10 md:overflow-y-visible "
    >
      {codeSnippetsData!.map((codeSnippet) => {
        return (
          <div
            id="snippet"
            key={codeSnippet.id}
            className="flex flex-col gap-3 w-full lg:items-center  2xl:items-center md:pr-10 
                       md:border-r-1 md:border-lines md:pt-12 pb-6"
          >
            <div className="flex flex-col gap-3 2xl:items-center">
              <div
                id="snippet-creator"
                className="flex flex-row items-center gap-3 md:w-full 2xl:w-full 
                         2xl:max-w-[664px]"
              >
                <a
                  className="text-secondary-blue font-bold text-sm flex flex-row items-center gap-3 md:w-full"
                  target="_blank"
                  href={`https://github.com/${codeSnippet.ownerLogin}`}
                >
                  <img src={userImg} />
                  {codeSnippet.ownerLogin}
                </a>
              </div>
              <div
                id="snippet"
                className="bg-primary-darkMarine border-1 text-sm leading-7
                          font-extralight border-lines rounded-2xl p-6
                          md:max-w-[664px] lg:w-[calc(72vw/2)] xl:w-[calc(80vw/2)];"
              >
                <CodeSnippet codeType={codeSnippet.language} id="code">
                  {codeSnippet.code!}
                </CodeSnippet>
              </div>
              <div
                id="description"
                className="border-t-1 w-full border-lines pt-3 md:max-w-[664px] "
              >
                <p className="text-xs w-full text-center">
                  {codeSnippet.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
