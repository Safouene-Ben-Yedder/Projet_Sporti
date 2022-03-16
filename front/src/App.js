import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddProgrammeSeance } from "./components/programmeSeance/AddProgrammeSeance";
import { EditProgrammeSeance } from "./components/programmeSeance/EditProgrammeSeance";
import { Home } from "./components/home/Home";
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/add" component={AddProgrammeSeance} />
					<Route path="/edit/:id" component={EditProgrammeSeance} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
