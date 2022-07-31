import React, { FC } from 'react'
import { Repo } from '../types'
import { StyledListItem, StyledLink } from './styled'

interface ListItemProps {
  repo: Repo
}

export const ListItem: FC<ListItemProps> = ({ repo }) => {
  return (
    <StyledListItem key={repo.id}>
      <StyledLink to={`/repo/${repo.id}`}>
        <img height="30" width="30" src={repo.owner.avatar_url} alt={repo.full_name}/>
        <span data-testid="repo-name">{repo.name}</span>
      </StyledLink>
    </StyledListItem>
  )
}
