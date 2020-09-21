/// <reference types="Cypress" />
var Elements = require("../support/elements");
var data = require("../support/data");

describe("Sample project ", () => {

  xit("Radio buttons example", () => {
    var goTo = new Elements();

    cy.get(goTo.radio).eq(0).click(); //clicking on the first radio element out of 3

    //to click on all the radio buttons one by one
    cy.get(goTo.radio).each((el, i, $list) => {
      el.click();
    });

    //addd an assertion here to make sure the desired option is selected
  });

  it("Dropdown Example", () => {
    var goTo = new Elements();
    cy.get(goTo.dropDownExample)
      .select("option2")
      .should("have.value", "option2");
  });

  it("Checkbox example", () => {
    var goTo = new Elements();
    cy.get(goTo.dropDownExample)
      .select("option2")
      .should("have.value", "option2");
  });
});

before(() => {
  cy.visit(Cypress.env("baseUrl"));
});
