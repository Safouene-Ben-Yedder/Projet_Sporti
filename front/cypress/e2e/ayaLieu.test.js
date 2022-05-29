describe("lieu test", () => {
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
	it("creer lieu", () => {
		cy.once("uncaught:exception", () => false);

		const nom = "nom";
		const ville = "ville";
		const pays = "pays";
        const adresse = "adresse";
		cy.visit("http://localhost:3000/lieu-page");

		cy.get('#nomLieu').type(nom, { force: true });
		// cy.wait(1000);
		cy.get('#villeLieu').type(ville, { force: true });
		// cy.wait(1000);
		cy.get('#paysLieu').type(pays, { force: true });
		cy.wait(1000);
        cy.get('#adresseLieu').type(adresse, { force: true });
		cy.wait(1000);
		
		cy.get('.ajoutLieu > .btn').click();

		// update lieu
		// cy.wait(1000);
		// cy.get(":nth-child(1) > .actions > .btn-primary").click();
		// cy.get(".competence > :nth-child(1) > :nth-child(2) > input")
		// 	.clear()
		// 	.type("test2");
		// cy.wait(1000);
		// cy.get(".competence > :nth-child(1) > :nth-child(3) > input")
		// 	.clear()
		// 	.type("lien2");
		// cy.wait(1000);
		// cy.get(":nth-child(1) > :nth-child(4) > select").select("Non");
		// cy.wait(1000);
		// cy.get(":nth-child(1) > div > :nth-child(1) > .star").click();
		// cy.wait(1000);
		// cy.get(":nth-child(1) > .btn").click();

		// //delete
		// cy.wait(2000);
		// cy.get(".btn-danger").click();
		// cy.wait(2000);
	});
});
