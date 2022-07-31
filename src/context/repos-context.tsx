import React, { useEffect, useState } from 'react'
import { Repo, RepoContextType } from '../types';

const initialState: RepoContextType = {
  error: undefined,
  isLoading: false,
  repos: [],
}

export const RepoContext = React.createContext<RepoContextType>(initialState);

interface ProviderProps {
  children: React.ReactNode;
}

function RepoProvider({ children }: ProviderProps) {
  const [repos, setRepos] = useState<Repo[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      const response = await fetch('https://api.github.com/orgs/godaddy/repos');

      const json = await response.json();

      setIsLoading(false);      
      setRepos(json);
    }

    fetchRepos()
      // make sure to catch any error
      .catch(error => {
        setIsLoading(false);
        setError(error)
        console.error(error)
      }
    );
  }, [])

  const value = {repos, isLoading, error };

  return <RepoContext.Provider value={value}>{children}</RepoContext.Provider>; 
}


function useRepos() {
  const context = React.useContext(RepoContext)
  if (context === undefined) {
    throw new Error('useRepos must be used within a RepoProvider')
  }
  return context
}

export { RepoProvider, useRepos }