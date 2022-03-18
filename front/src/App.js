import "./App.css";
import ProgrammeSeancePage from "./pages/programmeseancepage/ProgrammeSeancePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgrammeSeanceForm from "./components/programmeseanceform/ProgrammeSeanceForm";
function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/add" component={ProgrammeSeanceForm} />

					<Route exact path="/prog-page">
						<ProgrammeSeancePage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
