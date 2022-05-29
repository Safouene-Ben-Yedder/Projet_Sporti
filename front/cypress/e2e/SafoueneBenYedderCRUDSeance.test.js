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
	it("creer seance", () => {
		cy.once("uncaught:exception", () => false);

		const titre = "nomseance";
		const desc = "test";
		const Joueur = "6286d2719814ad2c3b5a3e58";
		const date = "2004-03-01";
		const Objectif = "Objectif";
		const lieu = "6286d2719814ad2c3b5a3e58";
		const competence = "62865184c4b6faffc61c7634";
		const statistique = "6288243e437599ed76d62504";
		const progseance = "6286ec836b3d82008a3d8273";

		cy.visit("http://localhost:3000/seance-page");

		cy.get("#1").type(titre);
		cy.wait(1000);
		cy.get("#2").type(desc, { force: true });
		cy.wait(1000);
		cy.get("#3").type(Joueur, { force: true });
		cy.wait(1000);
		cy.get("#4").type(date, { force: true });
		cy.wait(1000);
		cy.get("#5").type(Objectif, { force: true });
		cy.wait(1000);
		cy.get("#6").type(lieu, { force: true });
		cy.wait(1000);
		cy.get("#7").type(competence, { force: true });
		cy.wait(1000);
		cy.get("#8").type(statistique, { force: true });
		cy.wait(1000);
		cy.get("#9").type(progseance, { force: true });
		cy.wait(1000);

		cy.get(".ajout > .btn");

		// update seance
		cy.wait(1000);
		cy.get(":nth-child(1) > :nth-child(1) > .actions > .btn-primary");

		cy.get(".seance > :nth-child(1) > :nth-child(2) > input")
			.clear()
			.type("test2");
		cy.wait(1000);
		cy.get(".seance > :nth-child(1) > :nth-child(3) > input")
			.clear()
			.type("lien2");
		cy.wait(1000);
		cy.get(":nth-child(1) > :nth-child(4) > select").select("Non");
		cy.wait(1000);
		cy.get(":nth-child(1) > div > :nth-child(1) > .star").click();
		cy.wait(1000);
		cy.get(":nth-child(1) > .btn").click();

		//delete seance
		cy.wait(2000);
		cy.get(":nth-child(1) > :nth-child(1) > .actions > .btn-danger");
		cy.wait(2000);
	});
});
