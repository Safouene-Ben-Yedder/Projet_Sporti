describe("stat test", () => {
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

	it("creer stat", () => {
		cy.once("uncaught:exception", () => false);
		cy.visit("http://localhost:3000/Stat");
		const titre = "nomStat";
		const desc = "test";
		const lien = "lien";

		cy.get(":nth-child(1) > .form-control")
			.focus()
			.type(titre, { force: true });
		cy.wait(1000);
		cy.get(":nth-child(2) > .form-control").type(desc, { force: true });
		cy.wait(1000);
		cy.get(":nth-child(3) > .form-control").type(3, { force: true });
		cy.wait(1000);
		cy.get(":nth-child(4) > .form-control").type(lien, { force: true });
		cy.wait(1000);
		cy.get(":nth-child(5) > select").select("Oui");
		cy.wait(1000);
		cy.get(":nth-child(6) > select").select("Maximiser");
		cy.wait(1000);
		cy.get(".ajoutStat > .btn").click();

		//update competence
		cy.get(":nth-child(1) > .actions > .btn-primary").click();
		cy.wait(1000);
		cy.get(":nth-child(2) > input").clear().type("test2");
		cy.wait(1000);
		cy.get("div > :nth-child(3) > input").clear().type("20");
		cy.wait(1000);
		cy.get("div > :nth-child(4) > input").clear().type("lien2");
		cy.wait(1000);
		cy.get("div > :nth-child(5) > select").select("Non");
		cy.wait(1000);
		cy.get("div > :nth-child(6) > select").select("Minimiser");
		cy.wait(1000);
		cy.get("div > .btn").click();

		// delete
		cy.wait(3000);
		cy.get(".btn-danger").click();
	});
});
