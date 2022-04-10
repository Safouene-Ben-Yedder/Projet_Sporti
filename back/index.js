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
const authRoute = require("./routes/auth");
const lieuEntrainementRoute = require("./routes/lieuEntrainement");

const seanceRoute = require("./routes/seance");
const defiRoute = require("./routes/defi");
const eventRoute = require("./routes/event");

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
app.use("/api/auth", authRoute);
app.use("/api/lieu", lieuEntrainementRoute);

app.use("/api/seance", seanceRoute);
app.use("/api/defi", defiRoute);
app.use("/api/event", eventRoute);

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
