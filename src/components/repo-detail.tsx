import React, { FC, useMemo } from 'react'
import { useRepos } from '../context/repos-context'
import { useParams, Link } from 'react-router-dom';
import { Repo } from '../types';
import { StyledRepoDetail } from './styled';

export const RepoDetail: FC = () => {

  const { repos } = useRepos();
  let params = useParams();

  const repo = useMemo(() => {
    return repos.find(repo => repo.id === Number(params.id)) || {} as Repo;
  }
  , [repos, params.id])

  return (
    <StyledRepoDetail>
      <div>
        <img height="50" width="50" src={repo.owner.avatar_url} alt={repo.full_name}/>
        <h1>{repo.full_name}</h1>
      </div>
      <p>{repo.description}</p>
      <p>Gtihub link:
        <Link to={repo.html_url}>
          {repo.html_url}
        </Link>
      </p>
      <p>Language: {repo.language}</p>
      <p>Forks: {repo.forks}</p>
      <p>Open issues: {repo.open_issues}</p>
      <p>Watchers: {repo.watchers}</p>
    </StyledRepoDetail>
  )
}
