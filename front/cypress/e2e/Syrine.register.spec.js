/* eslint-disable no-undef */
/* eslint-disable jest/expect-expect */
describe("invitation test", () => {
	it("loginD", function () {
		cy.once("uncaught:exception", () => false);
		const name = "jendoubi";
		const prenom = "syrine";
		const email = "radh@gmail.com";
		const password = "Test1234*";
		cy.visit("http://localhost:3000/register-page");
		cy.get("form > :nth-child(1)").type(name);
		cy.get("form > :nth-child(2)").type(prenom);
		cy.get("form > :nth-child(3)").type(email);
		cy.get("form > :nth-child(4)").type(password);

		cy.get(".btn").click();
	});
	it("loginDf", function () {
		cy.once("uncaught:exception", () => false);
		const email = "radh@gmail.com";
		const password = "Test1234*";
		cy.visit("http://localhost:3000/auth-coach");
		cy.get("form > :nth-child(1)").type(email);
		cy.get("form > :nth-child(2)").type(password);

		cy.get(".btn").click();
	});
});
