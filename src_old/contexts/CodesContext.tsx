import axios from 'axios';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { githubApiGetCodes, githubApiGetGists } from '../apis/github';

export interface GistContextType {
  id: string;
  description: string;
  rawUrl: string;
  language: string;
  ownerLogin: string;
  avatarUrl: string;
  code?: string;
}

interface CodesContextProviderProps {
  children: ReactNode;
}

export const CodesContext = createContext({} as GistContextType[]);

// async function getGists() {
//   const api = axios.create({
//     baseURL: "https://api.github.com",
//   });
//   const githubResponse = await api.get("/gists", {
//     headers: {
//       Accept: "application/vnd.github+json",
//       Authorization: `Bearer ${import.meta.env.VITE_GITHUB_GIST_TOKEN}`,
//     },
//   });
//   const gists: GistContextType[] = [];
//   if (githubResponse.status >= 200 && githubResponse.status < 400) {
//     githubResponse.data.forEach((gist: any) => {
//       const gistRawUrl = gist.files[Object.keys(gist.files)[0]];
//       let gistCode: string = "";
//       fetch(gistRawUrl.raw_url)
//         .then((response) => response.text())
//         .then((response) => {
//           gistCode = response.toString();

//           gists.push({
//             id: gist.id,
//             ownerLogin: gist.owner.login,
//             rawUrl: gistRawUrl.raw_url,
//             description: gist.description,
//             language: gistRawUrl.language,
//             avatarUrl: gist.owner.avatar_url,
//             code: gistCode,
//           });
//         });
//     });
//   }
//   return gists;
// }

export function CodesContextProvider({ children }: CodesContextProviderProps) {
  const [codeSnippetsData, setCodeSnippetsData] = useState<GistContextType[]>(
    []
  );
  useEffect(() => {
    const getGists = async () => {
      const gistsWithoutCode = await githubApiGetGists();
      const gistsWithCode = await githubApiGetCodes(gistsWithoutCode);
      setCodeSnippetsData(gistsWithCode);
    };
    getGists();
  }, []);

  return (
    <CodesContext.Provider value={codeSnippetsData!}>
      {children}
    </CodesContext.Provider>
  );
}

export const useCodeSnippets = () => {
  const context = useContext(CodesContext);
  return context;
};
