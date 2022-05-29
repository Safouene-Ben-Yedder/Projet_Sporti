describe("event test", () => {
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
	it("creer event", () => {
		cy.once("uncaught:exception", () => false);

		const nom = "nomevent";
		const desc = "test";
		const date = "2022-05-20";
		const publique = true;
		cy.visit("http://localhost:3000/event-page");

		cy.get("#nomevent").type(nom, { force: true });
		cy.wait(1000);

		cy.get("#descevent").type(desc, { force: true });
		cy.wait(1000);
		cy.get("#dateevent").type(date, { force: true });
		cy.wait(1000);
		cy.get("#publiqueevent").type(publique, { force: true });
		cy.wait(1000);

		cy.get(".ajout > .btn");

		// update event
		cy.wait(1000);
		cy.get(":nth-child(1) > :nth-child(1) > .actions > .btn-primary");

		cy.get(".event > :nth-child(1) > :nth-child(2) > input")
			.clear()
			.type("test2");
		cy.wait(1000);
		cy.get(".event > :nth-child(1) > :nth-child(3) > input")
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
		cy.get(":nth-child(1) > :nth-child(1) > .actions > .btn-danger");
		cy.wait(2000);
	});
});
