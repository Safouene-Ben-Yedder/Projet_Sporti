const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
dotenv.config();
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
const showProfileJoueurRoute = require("./routes/joueur");
const abonnementRoute = require("./routes/coach");
const editprofileJoueurRoute = require("./routes/joueur");
const editprofileCoachRoute = require("./routes/coach");
const listPlayerCoachRoute = require("./routes/coach");
const PlayerCoachRoute = require("./routes/coach");
const SeancePlayerNow = require("./routes/seance");
const SeancePlayerAll = require("./routes/seance");
const FindSeancePlayer = require("./routes/seance");
const updateSeance = require("./routes/seance");
const createProgrammeSeance = require("./routes/programme");
const findProgrammeSeance = require("./routes/programme");
const findAllProgrammeSeance = require("./routes/programme");
const updateProgrammeSeance = require("./routes/programme");
const deleteProgrammeSeance = require("./routes/programme");

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log("Connected to Mongo"))
	.catch((err) => console.log(err));
var corsOptions = {
	origin: "http://localhost:3000",
	originn:
		"https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css",
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

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
app.use("/api/joueur", RegisterJoueurRoute);
app.use("/api/joueur", LoginJoueurRoute);
app.use("/api/coach", RegisterCoachRoute);
app.use("/api/coach", LoginCoachRoute);
app.use("/api/coach/liste", listPlayerCoachRoute);
app.use("/api/coach/", PlayerCoachRoute);
app.use("/api/coach", showProfileCoachRoute);
app.use("/api/profile", showProfileJoueurRoute);
app.use("/api/abonnement", abonnementRoute);
app.use("/api/edit/profile", editprofileJoueurRoute);
app.use("/api/edit/profile", editprofileCoachRoute);
app.use("/api/seance/joueur", SeancePlayerNow);
app.use("/api/seance/joueur", SeancePlayerAll);
app.use("/api/seance/joueur", FindSeancePlayer);
app.use("/api/seance/coach/update", updateSeance);
app.use("/api/coach/programme", createProgrammeSeance);
app.use("/api/coach/programme", findProgrammeSeance);
app.use("/api/coach/programme", findAllProgrammeSeance);
app.use("/api/coach/programme", updateProgrammeSeance);
app.use("/api/coach/programme", deleteProgrammeSeance);
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
