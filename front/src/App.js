import "./App.css";
import ProgrammeSeancePage from "./pages/programmeseancepage/ProgrammeSeancePage";
import LieuPage from "./pages/lieupage/LieuPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgrammeSeanceForm from "./components/programmeseanceform/ProgrammeSeanceForm";
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
				</Switch>
			</Router>
		</div>
	);
}

export default App;
