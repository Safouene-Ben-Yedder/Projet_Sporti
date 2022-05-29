describe("register test", () => {
	
	it("easy test", () => {
		expect(true).to.equal(true);
	});
	it("creer coach", () => {
		cy.once("uncaught:exception", () => false);
		const nom = "nom";
		const prenom = "prenom";
		const Email = "aya@hotmail.com";
		const tel = "12345678";
        const date = "12-02-6696";
		cy.visit("http://localhost:3000/register-page");
		cy.get('#nomC').type(nom);
		cy.get('#prenomC').type(prenom);
		cy.get('#emailC').type(Email);
		cy.get('#passC').type(tel);
		cy.get('.btn').click();
	});

    it("login coach", () => {
	
		cy.once("uncaught:exception", () => false);
		const email = "coach98@gmail.com";
		const password = "12345678a*A";
		cy.visit("http://localhost:3000/auth-coach");
		cy.get("form > :nth-child(1)").type(email);
		cy.get("form > :nth-child(2)").type(password);
		cy.get(".btn").click();
	
	});
});
