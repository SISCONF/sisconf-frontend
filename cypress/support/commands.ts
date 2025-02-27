/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
export {}
declare global {
  namespace Cypress {
    interface Chainable {
      loginCustomerUser(): Chainable<void>
      createCustomerUser(): Chainable<void>
    }
  }
}

import { faker } from "@faker-js/faker";

Cypress.Commands.add("createCustomerUser", () => {
    const email = faker.internet.email();
    const password = faker.internet.password({
        length: 8
    });

    cy.request({
        method: "POST",
        url: "/api/customers",
        body: {
            category: "MARKETER",
            person: {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                password: password,
                password2: password,
                cpf: "000.000.000-00",
                phone: "(84) 98000-0000",
                email: email,
                address: {
                    street: "Chico Cajá",
                    zipCode: "59900-000",
                    neighbourhood: "Chico Cajá",
                    number: 90,
                    city: 3783
                }
            }
        }
    }).then(response => {
        cy.wrap({ 
            id: response.body.id, 
            email: email, 
            password: password 
        }).as("customerTestUser");
    });
});

Cypress.Commands.add("loginCustomerUser", () => {
    cy.get<{ id: number, email: string, password: string }>("@customerTestUser")
    .then((customerTestUser) => {
        cy.request({
            method: "POST",
            url: "/api/people/login",
            body: {
                email: customerTestUser.email,
                password: customerTestUser.password
            }
        }).then(response => {
            cy.setCookie("access_token", response.body.authenticationToken);
            cy.setCookie("refresh_token", response.body.refreshToken);
        });
    });
});