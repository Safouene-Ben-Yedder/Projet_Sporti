describe("Crud programme", () => {
	// eslint-disable-next-line jest/expect-expect
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
		//cy.url().should("eq", "http://localhost:3000/coach/home");
		// eslint-disable-next-line no-undef
		cy.visit("http://localhost:3000/paiement");
		// eslint-disable-next-line no-undef
		cy.get(":nth-child(2) > .form-check-input").should("be.visible").click();
		// eslint-disable-next-line no-undef
		cy.get(".btn").should("be.visible").click();
	});
});
