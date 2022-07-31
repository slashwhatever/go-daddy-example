
import styled from 'styled-components'  

export const StyledRepoDetail = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #E2E2E2;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  align-items: start;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;

  & > img {
    margin-right: 1rem;
  }
`;
