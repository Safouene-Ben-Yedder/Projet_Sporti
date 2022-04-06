import "./App.css";
import ProgrammeSeancePage from "./pages/programmeseancepage/ProgrammeSeancePage";
import LieuPage from "./pages/lieupage/LieuPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgrammeSeanceForm from "./components/programmeseanceform/ProgrammeSeanceForm";

import { Paiementform } from "./components/paiementform/Paiementform";

import LieuForm from "./components/lieuForm/LieuForm";

import RegisterPage from "./pages/RegisterCoach/RegisterPage";
import InvitationPage from "./pages/invitationpage/InvitationPage";
import InvitationForm from "./components/invitationform/invitationform";
import PasswordForm from "./components/invitationform/passwordform";
function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/add" component={ProgrammeSeanceForm} />

					<Route exact path="/prog-page">
						<ProgrammeSeancePage />
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
