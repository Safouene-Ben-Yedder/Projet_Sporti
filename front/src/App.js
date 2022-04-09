import "./App.css";
import ProgrammeSeancePage from "./pages/programmeseancepage/ProgrammeSeancePage";
import LieuPage from "./pages/lieupage/LieuPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgrammeSeanceForm from "./components/programmeseanceform/ProgrammeSeanceForm";

import { Paiementform } from "./components/paiementform/Paiementform";

import LieuForm from "./components/lieuForm/LieuForm";

import RegisterPage from "./pages/RegisterCoach/RegisterPage";

import LoginPage from "./pages/loginCoach/LoginPage";
import ProfilJoueurPage from "./pages/profilJoueurPage/ProfilJoueurPage";
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
				
					<Route exact path="/addLieu" component={LieuForm} />

					<Route exact path="/lieu-page">
						<LieuPage />

					</Route>
					<Route exact path="/register-page">
						<RegisterPage />
					</Route>
					<Route exact path="/profileJoueur">
						<ProfilJoueurPage />
					</Route>
					<Route exact path="/auth-coach">
						<LoginPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
