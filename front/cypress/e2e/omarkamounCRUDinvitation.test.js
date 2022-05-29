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
	it("creer invitation", () => {
		cy.once("uncaught:exception", () => false);
		const nom = "nom";
		const prenom = "prenom";
		const Email = "omar.-98@hotmail.com";
		const tel = "12345678";
		cy.visit("http://localhost:3000/invitation");
		cy.get(":nth-child(1) > .form-control").type(nom);
		cy.get(":nth-child(2) > .form-control").type(prenom);
		cy.get(":nth-child(3) > .form-control").type(Email);
		cy.get(":nth-child(4) > .form-control").type(tel);
		cy.get(".btn").click();
	});
});
