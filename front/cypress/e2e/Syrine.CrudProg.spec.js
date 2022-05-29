/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
/* eslint-disable jest/expect-expect */
describe("invitation test", () => {
	it("login", function () {
		cy.once("uncaught:exception", () => false);
		const email = "coach98@gmail.com";
		const password = "12345678a*A";
		cy.visit("http://localhost:3000/auth-coach");
		cy.get("form > :nth-child(1)").type(email);
		cy.get("form > :nth-child(2)").type(password);
		cy.get(".btn").click();
	});

	it("easy test", () => {
		expect(true).to.equal(true);
	});
	it("creer prog", () => {
		cy.once("uncaught:exception", () => false);
		cy.visit("http://localhost:3000/prog-page");
		const titre = "nom";
		const description = "prenom";
		const technique = "omar.-98@hotmail.com";
		const file = "12345678";
		const lien = "12345678";

		cy.wait(1000);
		cy.get(":nth-child(1) > .form-control")
			.focus()
			.type(titre, { force: true })
			.should("be.visible");
		cy.wait(1000);
		cy.get(":nth-child(2) > .form-control")
			.type(description, { force: true })
			.should("be.visible");
		cy.wait(1000);
		cy.get(":nth-child(3) > .form-control")
			.type(technique, {
				force: true,
			})
			.should("be.visible");
		cy.wait(1000);
		cy.get(":nth-child(4) > .form-control")
			.type(file, { force: true })
			.should("be.visible");
		cy.wait(1000);
		cy.get(":nth-child(5) > .form-control")
			.type(lien, { force: true })
			.should("be.visible");
		cy.wait(1000);
		cy.get(".ajout > .btn").click().should("be.visible");
	});
});
