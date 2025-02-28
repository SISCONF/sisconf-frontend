describe('customer login tests', () => {
  beforeEach(() => {
    cy.createCustomerUser();
  });

  const nextBaseUrl = Cypress.env("baseNextUrl");

  it("should login when valid credentials", () => {
    cy.visit(`${nextBaseUrl}/login`)
    cy.get<{ id: number, email: string, password: string }>("@testUser")
    .then(testUser => {
      cy.get("input[id='email']").type(testUser.email)
      cy.get("input[id='password']").type(testUser.password);
      cy.get("button[type='submit']").contains("Entrar").click();

      cy.get("body").should("not.contain", "a[href='/login']");
      cy.get("body").should("not.contain", "a[href='/register']");
    });
  });

  it("should not login when invalid credentials", () => {
    cy.visit(`${nextBaseUrl}/login`)
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

  afterEach(() => {
    cy.get<{ id: number, email: string, password: string }>("@testUser")
    .then(testUser => {
      cy.loginTestUser(testUser);
      cy.getCookie("access_token").then(cookie => {
        if (cookie && cookie.value) {
          cy.request({
            method: "DELETE",
            url: `/api/customers/${testUser.id}`,
            headers: {
              Authorization: `Bearer ${cookie.value}`
            }
          });
        } else {
          cy.log("Access token not found");
        }
      });
    });
  })
});