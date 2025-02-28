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
      loginTestUser(testUser: { id: number, email: string, password: string }): Chainable<void>
      createCustomerUser(): Chainable<void>
      createEntrepreneurUser(): Chainable<void>
    }
  }
}

import { faker } from "@faker-js/faker";

Cypress.Commands.add("createEntrepreneurUser", () => {
    const email = faker.internet.email();
    const password = faker.internet.password({
        length: 8
    });

    cy.request({
        method: "POST",
        url: "/api/entrepreneurs",
        body: {
            businessName: "Horta do Lucas",
            person: {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                password: password,
                password2: password,
                cpf: "222.222.222-22",
                cnpj: "33.333.333/0001-11",
                phone: "(84) 98777-7777",
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
        }).as("testUser");
    })
});

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
        }).as("testUser");
    });
});

Cypress.Commands.add("loginTestUser", (testUser: { id: number, email: string, password: string }) => {
    cy.get<{ id: number, email: string, password: string }>("@testUser")
    .then((testUser) => {
        cy.request({
            method: "POST",
            url: "/api/people/login",
            body: {
                email: testUser.email,
                password: testUser.password
            }
        }).then(response => {
            cy.setCookie("access_token", response.body.authenticationToken);
            cy.setCookie("refresh_token", response.body.refreshToken);
        });
    });
});