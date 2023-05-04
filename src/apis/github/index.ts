import { GistContextType } from '../../context/CodesContext';
import axios from 'axios';

export const githubApi = axios.create({
  baseURL: "https://api.github.com",
});
export const githubBasicHeaders = {
  Accept: "application/vnd.github+json",
  'X-GitHub-Api-Version': '2022-11-28',
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_GIST_TOKEN}`,
};

export const githubApiPaths = {
  getAllGists: "/gists",
};

export const githubApiGetCodeGists = async (): Promise<GistContextType[]> => {
  let gists: GistContextType[] = [];
  const response = await githubApi.get(githubApiPaths.getAllGists, {
    headers: githubBasicHeaders,
  });
  if (response.status >= 200 && response.status < 400) {
    response.data.forEach(async (data: any) => {
      if (!fileIsMd(data)) {
        const gistRawUrl = data.files[Object.keys(data.files)[0]];
        gists.push({
          id: data.id,
          ownerLogin: data.owner.login,
          rawUrl: gistRawUrl.raw_url,
          description: data.description,
          language: gistRawUrl.language,
          avatarUrl: data.owner.avatar_url,
        });
      }
    });
  }
  return gists;
};

function fileIsMd(data: any) {
  const keys = Object.keys(data.files)
  const files = data.files;
  for (const key of keys) {
    const file = files[key]
    if (file.filename.toLowerCase().endsWith(".md")) return true

  }

}

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
