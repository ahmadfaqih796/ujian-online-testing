describe("Data Creation", () => {
  beforeEach(() => {
    // Cypress configuration setup
  });

  it("Membuat data setelah login", () => {
    cy.login();
    cy.contains("Konfigurasi").click();
    cy.contains("Pelajaran").click();
    cy.wait(3000);
    cy.contains("Tambahkan").click();
    cy.get('input[name="pelajaran"]').type("Sosiologi");
    cy.get('button[type="submit"]').click();
    cy.contains("Berhasil menambahkan pelajaran").should("be.visible");
  });
});
