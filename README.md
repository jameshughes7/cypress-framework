# cypress-framework

## Contents

* [Build](#build)
* [Run](#run)
* [Test-Reporting](#test-reporting)

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
