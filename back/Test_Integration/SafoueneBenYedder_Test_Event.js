// const request = require("supertest");

// const { createServer } = require("../utils/serverUtils");
// const mongoose = require("mongoose");
// const Defi = require("../models/defi");
// const User = require("../models/User");
// const { MongoMemoryServer } = require("mongodb-memory-server");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config/.env" });
// const app = createServer();
// const supertest = request.agent(app);
// async function addUser(user) {
// 	const newUser = await User.create(user);
// 	return newUser;
// }

// function testLogin(supertest, data) {
// 	return supertest
// 		.post("/api/coach/login")
// 		.send({ email: data.email, password: data.password })
// 		.expect(200)
// 		.then((res) => {
// 			supertest.set("Authorization", `Bearer ${res._body.token}`);
// 			return res._body.token;
// 		});
// }
// describe("defi", () => {
// 	jest.setTimeout(30000);
// 	beforeAll(async () => {
// 		//await connectDB();
// 		const mongoServer = await MongoMemoryServer.create();
// 		await mongoose.connect(mongoServer.getUri(), {
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 		});
// 		const data = await addUser({
// 			nom: "x",
// 			prenom: "x",
// 			email: "x@gmail.com",
// 			password: "123456",
// 			role: "coach",
// 		});
// 		await testLogin(supertest, { email: data.email, password: "123456" });
// 	});
// 	afterAll(async () => {
// 		await mongoose.disconnect();
// 		await mongoose.connection.close();
// 	});
// 	test("should get all defi (empty defis) ", async () => {
// 		await supertest
// 			.get("/api/defi/findAll")
// 			.expect(200)
// 			.then((response) => {
// 				expect(Array.isArray(response._body)).toBeTruthy();
// 				expect(response._body.length).toEqual(0);
// 			});
// 	});
// 	test("should add a defi  ", async () => {
// 		const defi = {
// 			nom: "test",
// 			description: "test",
// 			lien: "test",
// 			objectif: "test",
// 		};
// 		await supertest
// 			.post("/api/defi/:token")
// 			.send(defi)

// 			.then((response) => {
// 				expect(response._body._id).toBeTruthy();
// 				expect(response._body.nom).toBe(defi.nom);
// 				expect(response._body.description).toBe(defi.description);
// 				expect(response._body.lienVideo).toBe(defi.lienVideo);
// 				expect(response._body.objectif).toBe(defi.objectif);
// 				savedDefi = response._body;
// 			});
// 	});
// 	test("should get all defis  ", async () => {
// 		await supertest
// 			.get("/api/defi/findAll/:token/")
// 			.expect(200)
// 			.then((response) => {
// 				expect(Array.isArray(response._body)).toBeTruthy();
// 				expect(response._body.length).toEqual(1);
// 				expect(response._body[0]._id).toBe(savedDefi._id);
// 				expect(response._body[0].nom).toBe(savedDefi.nom);
// 				expect(response._body[0].description).toBe(savedDefi.description);
// 				expect(response._body[0].lienVideo).toBe(savedDefi.lienVideo);
// 				expect(response._body[0].objectif).toBe(savedDefi.objectif);
// 			});
// 	});

// 	test("should return a single defi  ", async () => {
// 		await supertest
// 			.get("/api/defi/" + savedDefi._id)
// 			.expect(200)
// 			.then((response) => {
// 				expect(response._body._id).toBe(savedDefi._id);
// 				expect(response._body.nom).toBe(savedDefi.nom);
// 				expect(response._body.description).toBe(savedDefi.description);
// 				expect(response._body.lienVideo).toBe(savedDefi.lien);
// 				expect(response._body.objectif).toBe(savedDefi.objectif);
// 			});
// 	});
// 	test("should update a test", async () => {
// 		const defi = {
// 			nom: "test",
// 			description: "test",
// 			lienVideo: "test",
// 			objectif: "test",
// 		};

// 		await supertest
// 			.put("/api/defi/update/:token/:id" + savedDefi._id.toString())
// 			.send(defi)
// 			.expect(200)
// 			.then(async (response) => {
// 				// Check the response
// 				expect(response._body._id).toBe(savedDefi._id.toString());
// 				expect(response._body.nom).toBe(savedDefi.nom);
// 				expect(response._body.description).toBe(savedDefi.description);
// 				expect(response._body.lienVideo).toBe(savedDefi.lienVideo);
// 				expect(response._body.objectif).toBe(savedDefi.objectif);

// 				// Check the data in the database (optional)
// 				const newDefi = await Defi.findOne({
// 					_id: response._body._id,
// 				});
// 				expect(newDefi).toBeTruthy();
// 				expect(response._body.nom).toBe(defi.nom);
// 				expect(response._body.description).toBe(defi.description);
// 				expect(response._body.lienVideo).toBe(defi.lienVideo);
// 				expect(response._body.objectif).toBe(defi.objectif);
// 			});
// 	});
// 	test("should delete a defi using its id ", async () => {
// 		await supertest
// 			.delete("/api/defi/delete/:token/:id" + savedDefi._id.toString())
// 			.expect(200)
// 			.then(async () => {
// 				expect(
// 					await defi.findOne({ _id: savedDefi._id.toString() })
// 				).toBeFalsy();
// 			});
// 	});
// });
