import axios from 'axios';

import { GistContextType } from '../../context/CodesContext';

export const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

export const githubBasicHeaders = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_GIST_TOKEN}`,
};

export const githubApiPaths = {
  getAllGists: "/gists",
};

export const githubApiGetGists = async (): Promise<GistContextType[]> => {
  let gists: GistContextType[] = [];
  const response = await githubApi.get(githubApiPaths.getAllGists, {
    headers: githubBasicHeaders,
  });
  if (response.status >= 200 && response.status < 400) {
    response.data.forEach(async (data: any) => {
      const gistRawUrl = data.files[Object.keys(data.files)[0]];
      gists.push({
        id: data.id,
        ownerLogin: data.owner.login,
        rawUrl: gistRawUrl.raw_url,
        description: data.description,
        language: gistRawUrl.language,
        avatarUrl: data.owner.avatar_url,
      });
    });
  }
  return gists;
};

const githubApiGetCode = async (rawUrl: string): Promise<string> => {
  const code = (await axios.get(rawUrl)).data;
  return code;
};

export const githubApiGetCodes = async (
  gists: GistContextType[]
): Promise<GistContextType[]> => {
  const newGists = [...gists];

  for (const gist of gists) {
    const code = await githubApiGetCode(gist.rawUrl);
    gist.code = code;
  }

  return newGists;
};
