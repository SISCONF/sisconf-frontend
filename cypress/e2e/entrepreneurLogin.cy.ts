describe("entrepreneur login tests", () => {
    beforeEach(() => {
        cy.createEntrepreneurUser();
    });

    const baseNextUrl = Cypress.env("baseNextUrl");

    it("should login when valid credentials", () => {
        cy.visit(`${baseNextUrl}/login`);
        cy.get<{ id: number, email: string, password: string }>("@testUser")
        .then(testUser => {
            cy.get("input[id='email']").type(testUser.email)
            cy.get("input[id='password']").type(testUser.password);
            cy.get("button[type='submit']").contains("Entrar").click();

            cy.get("body").should("not.contain", "a[href='/login']");
            cy.get("body").should("not.contain", "a[href='/register']");
        });
    });

    it("should not login when invalid password", () => {
        cy.visit(`${baseNextUrl}/login`)
        cy.get<{ id: number, email: string, password: string }>("@testUser")
        .then(testUser => {
            cy.get("input[id='email']").type(testUser.email)
            cy.get("input[id='password']").type("abcd123@");
            cy.get("button[type='submit']").contains("Entrar").click();

            cy.get("form").within(() => {
            cy.get("div[id='error-message']").contains("Credenciais inválidas").should("exist")
            });
        });
    })

    it("should not login when invalid email format", () => {
        cy.visit(`${baseNextUrl}/login`)
        cy.get<{ id: number, email: string, password: string }>("@testUser")
        .then(testUser => {
            cy.get("input[id='email']").type("aaaaaaaaaa")
            cy.get("input[id='password']").type(testUser.password);
            cy.get("button[type='submit']").contains("Entrar").click();

            cy.get("a[href='/login']").should("exist");
        });
    })

    it("should not login when invalid email", () => {
        cy.visit(`${baseNextUrl}/login`)
        cy.get<{ id: number, email: string, password: string }>("@testUser")
        .then(testUser => {
            cy.get("input[id='email']").type("aaaaaaaaaa@gmail.com")
            cy.get("input[id='password']").type(testUser.password);
            cy.get("button[type='submit']").contains("Entrar").click();

            cy.get("form").within(() => {
            cy.get("div[id='error-message']").contains("Credenciais inválidas").should("exist")
            });
        });
    })

    afterEach(() => {
        cy.get<{ id: number, email: string, password: string }>("@testUser")
        .then(testUser => {
            cy.loginTestUser(testUser).then(response => {
                cy.setCookie("access_token", response.body.authenticationToken);
                cy.setCookie("refresh_token", response.body.refreshToken);
            });
            cy.getCookie("access_token").then(cookie => {
                if (cookie && cookie.value) {
                    cy.request({
                        method: "DELETE",
                        url: `/api/entrepreneurs/${testUser.id}`,
                        headers: {
                            Authorization: `Bearer ${cookie.value}`
                        }
                    });
                } else {
                    cy.log("Access token not found");
                }
            });
        });
    });
});