import * as XLSX from "xlsx";

it("Mengisi nilai input berdasarkan data dari file Excel", () => {
  cy.login();
  cy.contains("Konfigurasi").click();
  cy.contains("Pelajaran").click();
  cy.wait(1000);
  cy.fixture("excel/data-pelajaran.xlsx", "binary").then((excelData) => {
    const workbook = XLSX.read(excelData, { type: "binary" });
    const worksheet = workbook.Sheets["Data Pelajaran"];
    const data = XLSX.utils.sheet_to_json(worksheet);
    data.forEach((row) => {
      const pelajaran = row["Pelajaran"];
      cy.contains("Tambahkan").click();
      cy.get('input[name="pelajaran"]').type(pelajaran);
      cy.get('button[type="submit"]').click();
      cy.contains("Berhasil menambahkan").should("be.visible");
      cy.wait(1000);
    });
  });
});
