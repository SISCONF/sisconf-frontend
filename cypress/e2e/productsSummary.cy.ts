import { TestUser } from "../types/users";

describe("products summary/order feature", () => {
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

    it("should inform when no products in the shopping bag", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("a[href='/products-summary']").click();
        cy.get("p").contains("Nenhum item na sacola.").should("exist");
    });

    it("should list all added products", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("button[id='add-to-shopping-bag-button']").first().click();
        cy.get("button[id='add-to-shopping-bag-button']").eq(2).click();
        cy.get("a[href='/products-summary']").click();
        cy.get("p").contains("Nenhum item na sacola.").should("not.exist");
    });

    it("should update product amount when in shopping bag", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("button[id='add-to-shopping-bag-button']").first().click();
        cy.get("button[id='add-to-shopping-bag-button']").eq(2).click();
        cy.get("a[href='/products-summary']").click();
        cy.get("svg[id='increase-product-amount-button']").first().should("be.visible").click();
        cy.get("input[id='product-amount-indicator']").first().should(
            "have.value",
            2
        );
    });

    it("should decrease product amount when in shopping bag", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("button[id='add-to-shopping-bag-button']").first().click();
        cy.get("button[id='add-to-shopping-bag-button']").eq(2).click();
        cy.get("a[href='/products-summary']").click();
        cy.get("svg[id='increase-product-amount-button']").first().should("be.visible").click();
        cy.get("svg[id='decrease-product-amount-button']").first().should("be.visible").click();
        cy.get("input[id='product-amount-indicator']").first().should(
            "have.value",
            1
        );
    });

    it("should not be able to decrease product amount below 1", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("button[id='add-to-shopping-bag-button']").first().click();
        cy.get("button[id='add-to-shopping-bag-button']").eq(2).click();
        cy.get("a[href='/products-summary']").click();
        cy.get("svg[id='decrease-product-amount-button']").first().should("be.visible").click();
        cy.get("input[id='product-amount-indicator']").first().should(
            "have.value",
            1
        );
    });

    it("should be able to empty bag", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("button[id='add-to-shopping-bag-button']").first().click();
        cy.get("button[id='add-to-shopping-bag-button']").eq(2).click();
        cy.get("a[href='/products-summary']").click();
        cy.get("button").contains("Esvaziar sacola").click();
        cy.get("div > div:nth-of-type(2) > button:nth-of-type(2)").click();
        cy.get("p").contains("Nenhum item na sacola.").should("be.visible");
    });

    it("should be able to return to products browsing page through add more products link", () => {
        cy.visit(`${baseNextUrl}/products`);
        cy.get("button[id='add-to-shopping-bag-button']").first().click();
        cy.get("button[id='add-to-shopping-bag-button']").eq(2).click();
        cy.get("a[href='/products-summary']").click();
        cy.get("button").contains("Adicionar mais produtos").click();
        cy.url().should("eq", `${baseNextUrl}/products`);
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