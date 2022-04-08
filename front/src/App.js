import "./App.css";
import SeancePage from "./pages/seancepage/SeancePage";
import SeanceForm from "./components/seanceform/SeanceForm";

import DefiPage from "./pages/defipage/DefiPage";
import DefiForm from "./components/defiform/DefiForm";

import EventPage from "./pages/eventpage/EventPage";
import EventForm from "./components/eventform/EventForm";

import ProgrammeSeancePage from "./pages/programmeseancepage/ProgrammeSeancePage";
import LieuPage from "./pages/lieupage/LieuPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgrammeSeanceForm from "./components/programmeseanceform/ProgrammeSeanceForm";

import { Paiementform } from "./components/paiementform/Paiementform";

import LieuForm from "./components/lieuForm/LieuForm";

import RegisterPage from "./pages/RegisterCoach/RegisterPage";
import InvitationPage from "./pages/invitationpage/InvitationPage";
import PasswordForm from "./components/invitationform/passwordform";
import CompetencePage from "./pages/competencepage/competencepage";
import StatPage from "./pages/statpage/statpage";
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

					<Route exact path="/add2" component={DefiForm} />
					<Route exact path="/defi-page">
						<DefiPage />
					</Route>

					<Route exact path="/add3" component={EventForm} />
					<Route exact path="/event-page">
						<EventPage />
					</Route>

					<Route exact path="/Competence">
						<CompetencePage />
					</Route>
					<Route exact path="/Stat">
						<StatPage />
					</Route>
					<Route path="/paiement">
						<Paiementform />
					</Route>
					{/* <Route exact path="/">
						<Redirect to="/lieu-page" />
					</Route>
					<Route exact path="/lieu-page">
						<LieuPage />
					</Route> */}
					<Route exact path="/addLieu" component={LieuForm} />

					<Route exact path="/lieu-page">
						<LieuPage />
					</Route>
					<Route exact path="/register-page">
						<RegisterPage />
					</Route>
					<Route path="/invitation">
						<InvitationPage />
					</Route>
					<Route path="/addPass" component={PasswordForm} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
