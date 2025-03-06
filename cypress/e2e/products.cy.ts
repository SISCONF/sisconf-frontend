import { TestUser } from "../types/users";

describe('browse products', () => {
    const baseNextUrl = Cypress.env("baseNextUrl");

    beforeEach(() => {
        cy.createCustomerUser();
        cy.get<TestUser>("@testUser")
        .then(testUser => {
            cy.loginTestUser(testUser).then(response => {
                cy.setCookie("access_token", response.body.authenticationToken);
                cy.setCookie("refresh_token", response.body.refreshToken);
            });
        });
    });

    it("shoud list foods", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("div[id='foods-list-container']").should("not.be.empty");
    });

    it("should filter foods", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("input[id='food-name']").type("Abacate");
        cy.get("div[id='foods-list-container']").should("not.be.empty");
        cy.get("div[id='foods-list-container']").should("have.length", 1);
    });

    it("should filter foods even when none match", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("input[id='food-name']").type("1234567");
        cy.get("div[id='foods-list-container']").should("be.empty");
    });

    it("should increase food amount count", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("svg[id='increase-product-amount-button']").first().click();
        cy.get("input[id='product-amount-indicator']").first().should("have.value", 2);
    });

    it("should decrease food amount count", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("svg[id='increase-product-amount-button']").first().click();
        cy.get("svg[id='decrease-product-amount-button']").first().click();
        cy.get("input[id='product-amount-indicator']").first().should("have.value", 1);

    });

    it("should not decrease food amount count below 1", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("svg[id='decrease-product-amount-button']").first().click();
        cy.get("input[id='product-amount-indicator']").first().should("have.value", 1);
    });

    it("should keep food count when after clearing filter", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("svg[id='increase-product-amount-button']").first().click();
        cy.get("input[id='food-name']").type("Abacaxi Grande")
        cy.get("input[id='food-name']").clear();
        cy.get("input[id='product-amount-indicator']").first().should("have.value", 2);
    });

    it("should add food to shopping bag", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("button[id='add-to-shopping-bag-button']").first().click();
        cy.get(".fixed").contains("Item adicionado!").should("be.visible");
    });

    afterEach(() => {
        cy.get<TestUser>("@testUser")
        .then(testUser => {
            cy.getCookie("access_token").then(cookie => {
                if (cookie && cookie.value) {
                    cy.deleteTestUser(testUser.id, cookie.value, "customers");
                } else {
                    cy.log("Access token not found");
                }
            });
        });
    });
});