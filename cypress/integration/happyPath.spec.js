/// <reference types="Cypress" />
var Elements = require("../support/elements");
var data = require("../support/data");

describe("Sample project ", () => {
  it("Radio buttons example", () => {
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
    cy.get(goTo.checkBoxesExample).first().check().should("be.checked"); //Check first option and make sure its selected
  });

  it("A new tab example", () => {
    var goTo = new Elements();
    cy.get(goTo.newTabExample).invoke("removeAttr", "target").click();
    cy.url().should("include", "/index");
  });

  it("Switch to alerts example", () => {
    var goTo = new Elements();
    //simple alert
    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.get(goTo.alertExample)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(data.alert_text);
      });
  });

  it("Switch to alerts example-2 ", () => {
    var goTo = new Elements();
    //Confirm alert
    cy.get(goTo.alertExample2).click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(confirm_alert);
    });
  });

  it("Content disappering assertion example ", () => {
    var goTo = new Elements();

    cy.get(goTo.displayedText).should("be.visible");
    cy.get(goTo.hideButton).click();

    cy.get(goTo.displayedText).should("not.be.visible");
    cy.get(goTo.showButton).click();

    cy.get(goTo.displayedText).should("be.visible");
  });

  it("iFrame example", () => {
    var goTo = new Elements();
    cy.frameLoaded();
    cy.iframe()
      .find("iframeElement")
      .click()
      .then(() => {
        //Perform the iframe operation here
      });
    // You can also give it a selector to find elements inside of a specific iframe
    cy.enter("#my-iframe").then((getBody) => {
      getBody().find(".some-button").should("be.visible").click();
      getBody().contains("Some hidden element").should("not.be.visible");
    });
  });
});

before(() => {
  cy.visit(Cypress.env("baseUrl"));
});
