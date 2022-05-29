// const request = require("supertest");

// const { createServer } = require("../utils/serverUtils");
// const mongoose = require("mongoose");
// const Event = require("../models/event");
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
// describe("event", () => {
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
// 	test("should get all event (empty Events) ", async () => {
// 		await supertest
// 			.get("/api/event/findAll")
// 			.expect(200)
// 			.then((response) => {
// 				expect(Array.isArray(response._body)).toBeTruthy();
// 				expect(response._body.length).toEqual(0);
// 			});
// 	});
// 	test("should add a event  ", async () => {
// 		const event = {
// 			nom: "test",
// 			description: "test",
// 			date: "2022-05-20",
// 			publique: true,
// 		};
// 		await supertest
// 			.post("/api/event/:token")
// 			.send(event)

// 			.then((response) => {
// 				expect(response._body._id).toBeTruthy();
// 				expect(response._body.nom).toBe(event.nom);
// 				expect(response._body.description).toBe(event.description);
// 				expect(response._body.date).toBe(event.date);
// 				expect(response._body.publique).toBe(event.publique);
// 				savedEvent = response._body;
// 			});
// 	});
// 	test("should get all events  ", async () => {
// 		await supertest
// 			.get("/api/event/findAll/:token/")
// 			.expect(200)
// 			.then((response) => {
// 				expect(Array.isArray(response._body)).toBeTruthy();
// 				expect(response._body.length).toEqual(1);
// 				expect(response._body[0]._id).toBe(savedEvent._id);
// 				expect(response._body[0].nom).toBe(savedEvent.nom);
// 				expect(response._body[0].description).toBe(savedEvent.description);
// 				expect(response._body[0].date).toBe(savedEvent.date);
// 				expect(response._body[0].publique).toBe(savedEvent.publique);
// 			});
// 	});

// 	test("should return a single Event  ", async () => {
// 		await supertest
// 			.get("/api/event/" + savedEvent._id)
// 			.expect(200)
// 			.then((response) => {
// 				expect(response._body._id).toBe(savedEvent._id);
// 				expect(response._body.nom).toBe(savedEvent.nom);
// 				expect(response._body.description).toBe(savedEvent.description);
// 				expect(response._body.date).toBe(savedEvent.lien);
// 				expect(response._body.publique).toBe(savedEvent.publique);
// 			});
// 	});
// 	test("should update a test", async () => {
// 		const event = {
// 			nom: "test",
// 			description: "test",
// 			date: "test",
// 			publique: "test",
// 		};

// 		await supertest
// 			.put("/api/event/update/:token/:id" + savedEvent._id.toString())
// 			.send(event)
// 			.expect(200)
// 			.then(async (response) => {
// 				// Check the response
// 				expect(response._body._id).toBe(savedEvent._id.toString());
// 				expect(response._body.nom).toBe(savedEvent.nom);
// 				expect(response._body.description).toBe(savedEvent.description);
// 				expect(response._body.date).toBe(savedEvent.date);
// 				expect(response._body.publique).toBe(savedEvent.publique);

// 				// Check the data in the database (optional)
// 				const newEvent = await Event.findOne({
// 					_id: response._body._id,
// 				});
// 				expect(newEvent).toBeTruthy();
// 				expect(response._body.nom).toBe(event.nom);
// 				expect(response._body.description).toBe(event.description);
// 				expect(response._body.date).toBe(event.date);
// 				expect(response._body.publique).toBe(event.publique);
// 			});
// 	});
// 	test("should delete a event using its id ", async () => {
// 		await supertest
// 			.delete("/api/event/delete/:token/:id" + savedEvent._id.toString())
// 			.expect(200)
// 			.then(async () => {
// 				expect(
// 					await event.findOne({ _id: savedEvent._id.toString() })
// 				).toBeFalsy();
// 			});
// 	});
// });
