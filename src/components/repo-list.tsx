import React, { FC } from 'react'

import { Repo } from '../types'
import { Loading } from './loading'
import { Error } from './error'
import { useRepos } from '../context/repos-context';

import { StyledList } from './styled'
import { ListItem } from './list-item';

export const RepoList: FC = () => {
  const { repos, isLoading, error } = useRepos();

  return (
    <StyledList>
      {isLoading && <Loading />}
      {error && <Error error={error}/>}
      <ul>
        {repos.map((repo: Repo) => (
          <ListItem key={repo.id} repo={repo}/>
        ))}
      </ul>
    </StyledList>
  )
}
