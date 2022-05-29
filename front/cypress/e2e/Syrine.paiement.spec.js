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
		// eslint-disable-next-line jest/valid-expect
		expect(true).to.equal(true);
	});
	it("abonnement", () => {
		cy.once("uncaught:exception", () => false);
		//cy.url().should("eq", "http://localhost:3000/coach/home");
		// eslint-disable-next-line no-undef
		cy.visit("http://localhost:3000/paiement");
		// eslint-disable-next-line no-undef
		cy.get(":nth-child(2) > .form-check-input").click();
		// eslint-disable-next-line no-undef
		cy.get(".btn").click();
	});
});
