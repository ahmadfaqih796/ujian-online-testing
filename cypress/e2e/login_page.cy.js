describe("Login", () => {
  beforeEach(() => {
    // cy.viewport(1536, 960);
    cy.viewport("iphone-5");
    cy.visit("http://localhost:3000/authentication/login");
    cy.wait(2000);
    cy.intercept("POST", "http://localhost:3030/authentication").as(
      "loginRequest"
    );
  });

  it("Login gagal dengan password salah", () => {
    cy.get('input[name="email"]').type("admin@ujian.com");
    cy.get('input[name="password"]').type("135677");
    cy.get('button[type="submit"]').click();
    cy.contains("Email atau password salah").should("be.visible");
    cy.wait(2000);
  });

  it("Login berhasil", () => {
    cy.get('input[name="email"]').type("admin@ujian.com");
    cy.get('input[name="password"]').type("123");
    cy.get('button[type="submit"]').click();
    cy.contains("Hi,").should("be.visible", {
      timeout: 5000,
      delay: 2000,
    });
  });
});
