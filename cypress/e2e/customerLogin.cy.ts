describe('customer login tests', () => {
  beforeEach(() => {
    cy.createCustomerUser();
  });

  it("should login when valid credentials", () => {
    cy.visit("http://localhost:3000/login")
    cy.get<{ id: number, email: string, password: string }>("@customerTestUser")
    .then(customerTestUser => {
      cy.get("input[id='email']").type(customerTestUser.email)
      cy.get("input[id='password']").type(customerTestUser.password);
      cy.get("button[type='submit']").contains("Entrar").click();

      cy.intercept("GET", )

      cy.get("body").should("not.contain", "a[href='/login']");
      cy.get("body").should("not.contain", "a[href='/register']");
    });
  });

  afterEach(() => {
    cy.loginCustomerUser();
    cy.get<{ id: number, email: string, password: string }>("@customerTestUser")
    .then(customerTestUser => {
      cy.getCookie("access_token").then(cookie => {
        if (cookie && cookie.value) {
          cy.request({
            method: "DELETE",
            url: `/api/customers/${customerTestUser.id}`,
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