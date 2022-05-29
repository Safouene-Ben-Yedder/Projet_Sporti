describe("competence test", () => {
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
	it("creer competence", () => {
		cy.once("uncaught:exception", () => false);

		const nom = "nomcomp";
		const desc = "test";
		const lien = "lien";
		cy.visit("http://localhost:3000/Competence");

		cy.get("#nomCompetence").focus().type(nom, { force: true });
		cy.wait(1000);
		cy.get("#descCompetence").type(desc, { force: true });
		cy.wait(1000);
		cy.get("#lienCompetence").type(lien, { force: true });
		cy.wait(1000);
		cy.get("select").select("Oui");
		cy.wait(1000);
		cy.get(":nth-child(4) > .star > path").click();
		cy.wait(1000);
		cy.get(".ajoutcomp > .btn").click();

		//update competence
		cy.wait(1000);
		cy.get(":nth-child(1) > .actions > .btn-primary").click();
		cy.get(".competence > :nth-child(1) > :nth-child(2) > input")
			.clear()
			.type("test2");
		cy.wait(1000);
		cy.get(".competence > :nth-child(1) > :nth-child(3) > input")
			.clear()
			.type("lien2");
		cy.wait(1000);
		cy.get(":nth-child(1) > :nth-child(4) > select").select("Non");
		cy.wait(1000);
		cy.get(":nth-child(1) > div > :nth-child(1) > .star").click();
		cy.wait(1000);
		cy.get(":nth-child(1) > .btn").click();

		//delete
		cy.wait(2000);
		cy.get(".btn-danger").click();
		cy.wait(2000);
	});
});
