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

  xit("Dropdown Example", () => {
    var goTo = new Elements();
    cy.get(goTo.dropDownExample)
      .select("option2")
      .should("have.value", "option2");
  });

  xit("Checkbox example", () => {
    var goTo = new Elements();

    cy.get(goTo.checkBoxesExample).first().check().should("be.checked"); //Check first option and make sure its selected
  });

  xit("A new tab example", () => {
    var goTo = new Elements();
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.url().should("include", "/index");
  });
  it("Switch to alerts example", () => {
    var goTo = new Elements();
    //simple alert
    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.get("#alertbtn")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(data.alert_text);
      });
  });

  it("Switch to alerts example -2 ", () => {
    var goTo = new Elements();
    //Confirm alert
    cy.get("#confirmbtn").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(confirm_alert);
    });
  });
});

before(() => {
  cy.visit(Cypress.env("baseUrl"));
});
