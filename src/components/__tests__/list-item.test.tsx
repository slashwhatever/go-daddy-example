import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { fooRepo, barRepo } from '../../test-helpers/mock-data'
import { BrowserRouter } from 'react-router-dom'

import { ListItem } from '../list-item'


test('loads and displays a repo list item', async () => {
  const {rerender} = render(<ListItem repo={fooRepo}/>, {wrapper: BrowserRouter})
  
  const fooImg = screen.getByAltText("test/foo")
  expect(fooImg).toBeInTheDocument();
  expect(fooImg).toHaveAttribute('src', 'https://fillmurray.com/200/300')
  
  const fooRepoName = screen.getByTestId("repo-name")
  expect(fooRepoName).toHaveTextContent("foo");

  const fooLink = screen.getByRole('link')
  expect(fooLink).toBeInTheDocument();
  expect(fooLink).toHaveAttribute('href', '/repo/1')

  rerender(<ListItem repo={barRepo} />)

  const barImg = screen.getByAltText("test/bar")
  expect(barImg).toBeInTheDocument();
  expect(barImg).toHaveAttribute('src', 'https://fillmurray.com/200/300')
  
  const barRepoName = screen.getByText("bar")
  expect(barRepoName).toHaveTextContent("bar");

  const barLink = screen.getByRole('link')
  expect(barLink).toBeInTheDocument();
  expect(barLink).toHaveAttribute('href', '/repo/2')

})
