const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
dotenv.config();
const programmeSeanceRoute = require("./routes/programmeSeance");
const competenceRoute = require("./routes/competence");
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log("Connected to Mongo"))
	.catch((err) => console.log(err));
var corsOptions = {
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/api/programme", programmeSeanceRoute);
app.use("/api/competence", competenceRoute);
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
