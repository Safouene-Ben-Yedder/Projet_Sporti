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
const statRoute = require("./routes/stat");
const authRoute = require("./routes/auth");
const lieuEntrainementRoute = require("./routes/lieuEntrainement");
const seanceRoute = require("./routes/seance");
const defiRoute = require("./routes/defi");
const eventRoute = require("./routes/event");
const disciplineRoute = require("./routes/discipline");
const alerteRoute = require("./routes/alerte");
const InvitationRoute = require("./routes/invitation");
const RegisterJoueurRoute = require("./routes/joueur");
const LoginJoueurRoute = require("./routes/joueur");
const RegisterCoachRoute = require("./routes/coach");
const LoginCoachRoute = require("./routes/coach");
const showProfileCoachRoute = require("./routes/coach");
const abonnementRoute = require("./routes/coach");
const profileJoueurRoute = require("./routes/joueur");
const editprofileJoueurRoute = require("./routes/joueur");
const editprofileCoachRoute = require("./routes/joueur");
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
app.use("/api/stat", statRoute);
app.use("/api/seance", seanceRoute);
app.use("/api/defi", defiRoute);
app.use("/api/event", eventRoute);
app.use("/api/discipline", disciplineRoute);
app.use("/api/alerte", alerteRoute);
app.use("/api/invitation", InvitationRoute);
app.use("/api/register", RegisterJoueurRoute);
app.use("/api/login", LoginJoueurRoute);
app.use("/api/register", RegisterCoachRoute);
app.use("/api/login", LoginCoachRoute);
app.use("/api/login", showProfileCoachRoute);
app.use("/api/abonnement", abonnementRoute);
app.use("/api/profile", profileJoueurRoute);
app.use("/api/profile", editprofileJoueurRoute);
app.use("/api/profile", editprofileCoachRoute);

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
