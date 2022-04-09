import "./App.css";
import ProgrammeSeancePage from "./pages/programmeseancepage/ProgrammeSeancePage";
import LieuPage from "./pages/lieupage/LieuPage";
import RegisterJoueurPage from "./pages/registerJoueur/RegisterJoueurPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgrammeSeanceForm from "./components/programmeseanceform/ProgrammeSeanceForm";
import { LoginJoueurPage } from "./pages/loginJoueur/LoginJoueurPage";
import { PaiementForm } from "./components/paiementform/PaiementForm";

import LieuForm from "./components/lieuForm/LieuForm";

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
						<PaiementForm />
					</Route>
					<Route path="/registerjoueur">
						<RegisterJoueurPage />
					</Route>
					<Route path="/login">
						<LoginJoueurPage />
					</Route>
					<Route exact path="/addLieu" component={LieuForm} />

					<Route exact path="/lieu-page">
						<LieuPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
