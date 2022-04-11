import { useState } from "react";
import { Heading } from "../../components/heading/Heading";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import EventListe from "../../components/eventlist/EventListe";

export default function EventListePage() {
	const [updateMode, setUpdateMode] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const joueurs = [
		{
			nom: "ben yedder",
			prenom: "safouene",
		},
		{
			nom: "kammoun",
			prenom: "omar",
		},
	];
	const participer = () => {
		setIsVisible(!isVisible);
	};
	const interesse = () => {
		setIsVisible(!isVisible);
	};
	const pasparticiper = () => {
		setIsVisible(!isVisible);
	};
	const events =[
		{
			id: 1,
			nom: "Sport Day",
			description: "Gym Up",
			date: "2022-04-10",
			publique: true,
			joueurs: [],
		},
		{
			id: 2,
			nom: "Sporti",
			description: "Gym Up",
			date: "2022-04-10",
			publique: true,
			joueurs: [],
		},
		{
			id: 3,
			nom: "Gym Up",
			description: "Gym Up",
			date: "2022-04-10",
			publique: false,
			joueurs: [],
		},
	];

	return (
		<div className="App">
			<>
				<Heading />

				<h2> Liste des events </h2>
				<EventListe
					events={events}
					participer={participer}
					interesse={interesse}
					pasparticiper={pasparticiper}
				/>
				{isVisible && (
					<>
						{!updateMode ? (
							<>
								<Form>
									<FormGroup>
										{joueurs.map((joueur) => (
											<Label check>
												{joueur.nom}

												<Input type="checkbox" value={joueur.nom}  />
											</Label>
										))}
										<Button
											color="success"
											type="button"
											onClick={() => setUpdateMode(true)}>
											Participer
										</Button>
										<Button
											color="success"
											type="button"
											onClick={() => setUpdateMode(true)}>
											interessé
										</Button>
										<Button
											color="success"
											type="button"
											onClick={() => setUpdateMode(true)}>
											Ne pas participer
										</Button>
									</FormGroup>
								</Form>
							</>
						) : (
							<>
								<h5>choix confirmé</h5>
							</>
						)}
					</>
				)}
			</>
		</div>
	);
}
