
export interface Repo {
  id: number,
  name: string,
  full_name: string,
  html_url: string,
  description: string,
  owner: {
    avatar_url: string,
  },
  language: string,
  forks: number,
  open_issues: number,
  watchers: number,
}

export type RepoContextType = {
  error: string | undefined;
  isLoading: boolean;
  repos: Repo[];
};