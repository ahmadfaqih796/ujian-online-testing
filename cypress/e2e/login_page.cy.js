describe("Login", () => {
  beforeEach(() => {
    // Menjalankan langkah persiapan sebelum setiap pengujian
    cy.visit("http://localhost:3000/authentication/login");
    cy.wait(2000);
    cy.intercept("POST", "http://localhost:3030/authentication").as(
      "loginRequest"
    );
    // cy.wait("@loginRequest");
  });

  it("Login gagal dengan kredensial salah", () => {
    cy.get('input[name="email"]').type("admin@ujian.com");
    cy.get('input[name="password"]').type("135677");
    cy.get('button[type="submit"]').click();

    // Memverifikasi bahwa pesan kesalahan muncul
    cy.contains("Email atau password salah").should("be.visible", {
      timeout: 5000,
      delay: 2000,
    });
  });

  it("Login berhasil", () => {
    cy.get('input[name="email"]').type("admin@ujian.com");
    cy.get('input[name="password"]').type("123");
    cy.get('button[type="submit"]').click();
  });
});
