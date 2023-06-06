describe("Data Creation", () => {
  beforeEach(() => {
    // Cypress configuration setup
  });

  it("Membuat data setelah login", () => {
    const randomValue = Math.random().toString(36).substring(7);
    cy.login();
    cy.contains("Konfigurasi").click();
    cy.contains("Pelajaran").click();
    cy.wait(2000);
    cy.contains("Tambahkan").click();
    cy.wait(2000);
    cy.get('input[name="pelajaran"]').type(randomValue);
    cy.get('button[type="submit"]').click();
    cy.contains("Berhasil menambahkan pelajaran").should("be.visible");
  });
});
