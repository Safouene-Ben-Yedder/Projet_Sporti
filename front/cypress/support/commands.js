/* eslint-disable no-undef */

Cypress.Commands.add("login", () => {
	cy.request({
		method: "POST",
		url: "http://localhost:5000/api/coach/login/",

		body: {
			email: "radh@gmail.com",
			password: "Test1234*",
		},
	}).then((resp) => {
		window.localStorage.setItem("token", resp.body.token);
		window.localStorage.setItem("isCoach", true);
	});
});

Cypress.Commands.add("loginJoueur", () => {
	cy.request({
		method: "POST",
		url: "http://localhost5000/api/coach/login/",

		body: {
			email: "radh@gmail.com",
			password: "Test1234*",
		},
	}).then((resp) => {
		window.localStorage.setItem("token", resp.body);
		window.localStorage.setItem("isCoach", false);
	});
});
