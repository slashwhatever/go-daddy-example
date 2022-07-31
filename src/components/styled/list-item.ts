import styled from 'styled-components'  
import { Link} from 'react-router-dom';

export const StyledListItem = styled.li`
  border: 1px solid #E2E2E2;
  border-bottom-color: transparent;
  display: flex;
  flex-direction: column;
  transition: all .5s ease-in-out;
  
  &:first-of-type {
    border-radius: .5rem .5rem 0 0;
  }

  &:last-of-type {
    border-bottom-color: #E2E2E2;
    border-radius: 0 0 .5rem .5rem;
  }

  &:hover {
    border-color: var(--gd-green);
    box-shadow: 0 0 .2rem .2rem rgba(0, 0, 0, .1);
  }
`;

export const StyledLink = styled(Link)`
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #000;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img {
    margin-right: 1rem
  }
`;

