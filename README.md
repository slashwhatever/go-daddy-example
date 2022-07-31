# Getting Started

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Library Choices

### Create react app

Quickest way to get a starter app with typescript running. I might also have used one of my own boiler plate projects based on react and vite.

### React router

Simple routing library for ensuring we can eaily render a list and a detail page with nicely formatted routes and a fallback for invalid routes

### Context API

Redux would probably be overkill for a project we want to throw together in 2 hours. I've abstracted the context out with a custom hook to make it easy to reference the list of repos from anywhere

### React testing library

Comes with CRA and provides excellent user focussed behavioural testing. Given more time, I'd add more tests for each component and an integration test on the fetching of the repo data

### Styled components

Nice way to compartmentalise your styling per component and ensure there's no CSS leakeage.



