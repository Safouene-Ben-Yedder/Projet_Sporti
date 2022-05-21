import "./App.css";
import SeancePage from "./pages/seancepage/SeancePage";
import SeanceForm from "./components/seanceform/SeanceForm";

import SeancetodayPage from "./pages/seancepage/SeancetodayPage";
import SeancefilterPage from "./pages/seancepage/SeancefilterPage";

import DefiPage from "./pages/defipage/DefiPage";
import DefiForm from "./components/defiform/DefiForm";

import EventPage from "./pages/eventpage/EventPage";
import EventForm from "./components/eventform/EventForm";
import EventdetailsPage from "./pages/eventpage/EventdetailsPage";
import EventListePage from "./pages/eventpage/EventListePage";

import ProgrammeSeancePage from "./pages/programmeseancepage/ProgrammeSeancePage";
import LieuPage from "./pages/lieupage/LieuPage";
import RegisterJoueurPage from "./pages/registerJoueur/RegisterJoueurPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgrammeSeanceForm from "./components/programmeseanceform/ProgrammeSeanceForm";
import { LoginJoueurPage } from "./pages/loginJoueur/LoginJoueurPage";
import { PaiementForm } from "./components/paiementform/Paiementform";

import LieuForm from "./components/lieuForm/LieuForm";

import RegisterPage from "./pages/RegisterCoach/RegisterPage";
import LoginPage from "./pages/loginCoach/LoginPage";

import LoginDCoach from "./components/LoginFormCoach/LoginDCoach";
import ProfilJoueurPage from "./pages/profilJoueurPage/ProfilJoueurPage";

import InvitationPage from "./pages/invitationpage/InvitationPage";
import PasswordForm from "./components/invitationform/passwordform";
import CompetencePage from "./pages/competencepage/competencepage";
import StatPage from "./pages/statpage/statpage";
import ModifierJoueurPage from "./pages/modifierjoueurpage/modifierjoueurpage";
import { EspaceSeancePage } from "./pages/espaceSeancePage/EspaceSeancePage";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/add" component={ProgrammeSeanceForm} />
					<Route exact path="/prog-page">
						<ProgrammeSeancePage />
					</Route>

					<Route exact path="/add1" component={SeanceForm} />
					<Route exact path="/seance-page">
						<SeancePage />
					</Route>

					<Route exact path="/seancetoday-page">
						<SeancetodayPage />
					</Route>

					<Route exact path="/seancefilter-page">
						<SeancefilterPage />
					</Route>

					<Route exact path="/add2" component={DefiForm} />
					<Route exact path="/defi-page">
						<DefiPage />
					</Route>

					<Route exact path="/add3" component={EventForm} />
					<Route exact path="/event-page">
						<EventPage />
					</Route>

					<Route exact path="/eventdetails">
						<EventdetailsPage />
					</Route>

					<Route exact path="/eventliste-page">
						<EventListePage />
					</Route>

					<Route exact path="/Competence">
						<CompetencePage />
					</Route>
					<Route exact path="/Stat">
						<StatPage />
					</Route>
					<Route exact path="/Modifier">
						<ModifierJoueurPage />
					</Route>
					<Route path="/paiement">
						<PaiementForm />
					</Route>
					<Route path="/register-joueur">
						<RegisterJoueurPage />
					</Route>
					<Route path="/login-joueur">
						<LoginJoueurPage />
					</Route>
					<Route exact path="/addLieu" component={LieuForm} />
					<Route exact path="/loginD" component={LoginDCoach} />

					<Route exact path="/lieu-page">
						<LieuPage />
					</Route>
					<Route exact path="/register-page">
						<RegisterPage />
					</Route>

					<Route exact path="/auth-coach">
						<LoginPage />
					</Route>
					<Route exact path="/profileJoueur">
						<ProfilJoueurPage />
					</Route>

					<Route path="/invitation">
						<InvitationPage />
					</Route>
					<Route path="/espace-seance-joueur">
						<EspaceSeancePage />
					</Route>
					<Route path="/addPass" component={PasswordForm} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
