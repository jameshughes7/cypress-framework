# cypress-framework

## Contents

* [Summary](#summary)
* [Build](#build)
* [Run](#run)
* [Test-Reporting](#test-reporting)

### Summary

This test framework has been built using [Cypress](https://www.cypress.io/). It has been configured to use Typescript for type safety so that it can be built out and extended for larger, future Cypress projects. It also leverages the [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#with-out-of-the-box-support) to facilitate the use Gherkin feature files. The framework also utilises the Cypress Dashboard Service and Visual Testing but both are a work in progress.

### Build

* `npm install`

### Run

There are various options for running the cypress framework using the Cypress Test Runner:

* Using browser
  * `npm run cy:open`
* Headless:
  * `npm run cy:run:chrome`
  * `npm run cy:run:firefox`
  * `npm run cy:run:electron`
* Using the Cypress dashboard service  
  * `cy:run-dashboard`
* Build and run inside Docker container
  * `cy:run-docker`

### Test-Reporting

* Run one of the headless scripts e.g. `npm run cy:run:electron`
* Run `generate:html:report && open TestReport/cypress-tests-report.html`
