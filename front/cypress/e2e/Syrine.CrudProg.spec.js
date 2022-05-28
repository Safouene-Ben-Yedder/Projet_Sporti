/* eslint-disable jest/expect-expect */
describe("Crud programme", () => {
	it("Testing add", () => {
		// eslint-disable-next-line no-undef
		cy.visit("http://localhost:3000/auth-coach");
		// eslint-disable-next-line no-undef
		cy.get(":nth-child(1) > .input-group > .form-control")
			.should("be.visible")
			.type("coach98@gmail.com");
		// eslint-disable-next-line no-undef
		cy.get(":nth-child(2) > .input-group > .form-control")
			.should("be.visible")
			.type("12345678a*A");
		// eslint-disable-next-line no-undef
		cy.get(".btn").should("be.visible").click();
		// eslint-disable-next-line no-undef
		cy.visit("http://localhost:3000/prog-page");
	});
});
