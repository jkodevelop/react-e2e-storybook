# REACT end to end boilerplate [2021]
This repo is a boilerplate for **react-redux** projects. It includes localization: **i18next**, unit testing framework: **jest + @testing-library** and integration testing: **Cypress**. It also includes UI documenation module: **Storybook**. 

note: This project was checked and tested in a window 10 environment. there might be libraries like cypress that require additional libraries in other OS to run.

```

Please fork the project to start a new one with these specific module and frameworks.

```

### prerequisite:
1. node 12+
2. make sure to run `npm install` to install the package

## usage: Development
`npm start` then go to http://localhost:9001/

For development these libraries are in place:
- react-redux
- babel enabled
- sass/scss
- webpack
- i18next (localization)
- react-router-dom

There are examples for hot loading component and reducer injection code samples  inside ./source/js/components/App.js

note: one thing this project need is asynchronous redux handling. 2 common libraries are:
`redux-thunk` or `redux-saga`

## usage: Storybook - UI documentation
`npm run storybook` then go to http://localhost:6006/

Storybook allows developers to create UI and documentation with previews and in isolation. 

    reference: https://storybook.js.org/

## usage: Jest - unit testing
`npm run test` or `npm run test:watch` 
[test:watch] allows for live update and test when file changes

@testing-library module is added for snapshot type testing for component. Alternatively, **enzyme** can be used in place of  https://enzymejs.github.io/enzyme/

    reference: https://jestjs.io/
    https://testing-library.com/
    
## usage: Cypress - integration testing
`npm run cypress:open` this will open cypress browser

Cypress allows you to do integration testing. Examples for test cases and scripts are in ./cypress/integration

    reference: https://www.cypress.io/
