/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("the user visits Inshur Test Website", function () {
    cy.visit("http://localhost:3000").contains("Cypress Test");
})

Then("the Inshur logo should be visible on the page", () => {
    cy.get("[class='App-logo']").should('be.visible');
})

Then("website title should visible on page", () => {
    cy.get("[class='App-title']").contains('Cypress Test');
})

When("they click the {string} user", (User) => {
    switch (User) {
        case 'First':
            cy.get("[data-test='1']").click();
            break;
        case 'Second':
            cy.get("[data-test='2']").click();
            break;
        case 'Third':
            cy.get("[data-test='3']").click();
            break;
        default:
            console.log('User not available');
    }
})

Then("the {string} details are displayed", (User) => {
    switch (User) {
        case 'First':
            cy.contains("Has Bought a lot of products before and a high Value Customer");
            break;
        case 'Second':
            cy.contains("Buys Products Rarely");
            break;
        case 'Third':
            cy.contains("Buys Lots of Products in general");
            break;
        default:
            console.log('User not available');
    }
})





