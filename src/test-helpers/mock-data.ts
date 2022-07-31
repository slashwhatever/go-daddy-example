import { Repo } from '../types'

export const fooRepo: Repo = {
  "id": 1,
  "name": "foo",
  "full_name": "test/foo",
  "owner": {
    "avatar_url": "https://fillmurray.com/200/300",
  },
  "html_url": "http://www.foo.com",
  "description": "foo",
  "language": "foo",
  "forks": 1,
  "open_issues": 1,
  "watchers": 1,
}

export const barRepo: Repo = {
  "id": 2,
  "name": "bar",
  "full_name": "test/bar",
  "owner": {
    "avatar_url": "https://fillmurray.com/200/300",
  },
  "html_url": "http://www.bar.com",
  "description": "bar",
  "language": "bar",
  "forks": 2,
  "open_issues": 2,
  "watchers": 2,
}