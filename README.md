# Cypress_Sample_Project
A sample boiler plate project for automation using Cypress


# Integration tests

## Getting Started:

### System Dependencies:
                                                                 
- Credentials are defined in the environment variables.

### Running Tests:
```
yarn install 
```
to get the node_modules installed in the root directory of the project 


 ```
 yarn cy:run
 ```
to run the tests in a headless browser

```
yarn cy:open
```
to open the Cypress test runner


- mochawesome-reports have the report and screenshots/vidoes of the test cases failed/pass



# Style Guide

All strings related to the DOM belong in elements.js

The goal here is to ensure that all changes related to css or the html structure would only affect elements.js.
Additionally, it ensure that there are not a bunch of magic strings throughout the codebase.
spec files delegate all functionality to modules inside /helpers.

The goal here is that we are building up a re-usable library that can be shared across specs.
Also, each test reads like what the user is trying to accomplish, 
or what we are trying to validate about the system, as opposed to the details about how the site looks.

Further Reading:
For more information on Cypress please see: https://docs.cypress.io/guides/overview/why-cypress.html
