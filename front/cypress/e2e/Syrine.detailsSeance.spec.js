describe("invitation test", () => {
	it("login", function () {
		cy.once("uncaught:exception", () => false);
		const email = "syrine.jendoubi@esen.tn";
		const password = "Test1234*";
		cy.visit("http://localhost:3000/login-joueur");
		cy.get("form > :nth-child(1)").type(email);
		cy.get("form > :nth-child(2)").type(password);
		cy.get(".btn").click();
		cy.get(":nth-child(1) > .btn").click();
	});
});
