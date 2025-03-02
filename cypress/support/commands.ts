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
      loginTestUser(testUser: TestUserLoginData): Chainable<Cypress.Response<any>>
      createCustomerUser(): Chainable<void>
      createEntrepreneurUser(): Chainable<Cypress.Response<any>>
      deleteTestUser(testUserId: number, authenticationToken: string, route: string): Chainable<Cypress.Response<any>>
    }
  }
}

import { faker } from "@faker-js/faker";
import { TestUser, TestUserLoginData } from "../types/users";

Cypress.Commands.add("createEntrepreneurUser", () => {
    let authenticationToken = "";
    const testEntrepreneurLoginData: TestUserLoginData = {
        email: Cypress.env("testEntrepreneurEmail"),
        password: Cypress.env("testEntrepreneurPassword")
    }

    cy.loginTestUser(testEntrepreneurLoginData).then(response => {
        if (response.status == 200) {
            authenticationToken = response.body.authenticationToken;

            cy.request({
                method: "GET",
                url: "/api/entrepreneurs/me",
                headers: {
                    Authorization: `Bearer ${authenticationToken}`
                }
            }).then(response => {
                cy.deleteTestUser(
                    response.body.id,
                    authenticationToken,
                    "entrepreneurs"
                );
            });
        } else {
            cy.log("Entrepreneur is not created. Creating...");
        }
    });

    cy.request({
        method: "POST",
        url: "/api/entrepreneurs",
        body: {
            businessName: "Horta do Lucas",
            person: {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                password: testEntrepreneurLoginData.password,
                password2: testEntrepreneurLoginData.password,
                cpf: "222.222.222-22",
                cnpj: "33.333.333/0001-11",
                phone: "(84) 98777-7777",
                email: testEntrepreneurLoginData.email,
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
            email: testEntrepreneurLoginData.email,
            password: testEntrepreneurLoginData.password
        }).as("testUser");
    });
});

Cypress.Commands.add("createCustomerUser", () => {
    let authenticationToken = "";
    const testCustomerLoginData: TestUserLoginData = {
        email: Cypress.env("testCustomerEmail"),
        password: Cypress.env("testCustomerPassword")
    }

    cy.loginTestUser(testCustomerLoginData).then(response => {
        if (response.status == 200) {
            authenticationToken = response.body.authenticationToken;

            cy.request({
                method: "GET",
                url: "/api/customers/me",
                headers: {
                    Authorization: `Bearer ${authenticationToken}`
                }
            }).then(response => {
                cy.deleteTestUser(
                    response.body.id,
                    authenticationToken,
                    "customers"
                );
            });
        } else {
            cy.log("Customer is not created. Creating...");
        }
    });

    cy.request({
        method: "POST",
        url: "/api/customers",
        body: {
            category: "MARKETER",
            person: {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                password: testCustomerLoginData.password,
                password2: testCustomerLoginData.password,
                cpf: "000.000.000-00",
                phone: "(84) 98000-0000",
                email: testCustomerLoginData.email,
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
            email: testCustomerLoginData.email, 
            password: testCustomerLoginData.password 
        }).as("testUser");
    });
});

Cypress.Commands.add("loginTestUser", (userLoginData: TestUserLoginData) => {
    cy.request({
        method: "POST",
        url: "/api/people/login",
        body: {
            email: userLoginData.email,
            password: userLoginData.password
        },
        failOnStatusCode: false
    }).then(response => response);
});

Cypress.Commands.add(
    "deleteTestUser", 
    (testUserId: number, authenticationToken: string, route: string) => {
    cy.request({
        method: "DELETE",
        url: `/api/${route}/${testUserId}`,
        headers: {
            Authorization: `Bearer ${authenticationToken}`
        }
    }).then(response => response);
});