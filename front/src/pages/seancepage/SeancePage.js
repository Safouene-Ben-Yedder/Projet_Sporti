import { useState } from "react";
import { Heading } from "../../components/heading/Heading";
import SeanceForm from "../../components/seanceform/SeanceForm";
import SeanceList from "../../components/seancelist/SeanceList";
import { Form, FormGroup, Label, Button } from "reactstrap";

export default function SeancePage() {
	const [seances, setSeances] = useState([
		{
			id: 1,
			titre: "Séance YOGA",
			joueur: "Ali",
			horaire: 17,
			date: "16/09/2021",
			lieu: "Vicking bardo",
			competence: "30 secondes",
			objectif: "Améliorer les performances",
			statistique: "respiration",
		},
		{
			id: 2,
			titre: "Séance foot",
			joueur: "Sonia",
			horaire: 8,
			date: "02/07/2022",
			lieu: "Menzah",
			competence: "40 secondes",
			objectif: "Améliorer les performances",
			statistique: "200 mètres",
		},
		{
			id: 3,
			titre: "Midi foot",
			joueur: "Ahmed",
			horaire: 12,
			date: "05/09/2022",
			lieu: "Ennahli",
			competence: "60 secondes",
			objectif: "Améliorer les performances",
			statistique: "100 mètres",
		},
	]);
	const [isVisible, setIsVisible] = useState(false);
	const [updateMode, setUpdateMode] = useState(false);
	const [raison, setRaison] = useState("");
	function addSeance(
		titre,
		joueur,
		horaire,
		date,
		lieu,
		competence,
		objectif,
		statistique
	) {
		setSeances([
			...seances,
			{
				id: seances.length + 1,
				titre: titre,
				joueur: joueur,
				horaire: horaire,
				date: date,
				lieu: lieu,
				competence: competence,
				objectif: objectif,
				statistique: statistique,
			},
		]);
	}
	function UpdateSeance(
		id,
		titre,
		joueur,
		horaire,
		date,
		lieu,
		competence,
		objectif,
		statistique
	) {
		const newSeances = seances.map((seance) =>
			seance.id === id
				? {
						id,
						titre,
						joueur,
						horaire,
						date,
						lieu,
						competence,
						objectif,
						statistique,
 }
				: seance
		);
		setSeances(newSeances);
	}
	const supp = () => {
		setIsVisible(!isVisible);
	};
	function deleteSeance(id) {
		setSeances(seances.filter((index) => index.id !== id));
	}
	return (
		<div className="App">
			<>
				<Heading />
				<h2> Ajouter une séance</h2>
				<SeanceForm addSeance={addSeance} />
				<hr></hr>
				<h2> Liste des séances </h2>
				<SeanceList
					seances={seances}
					deleteSeance={deleteSeance}
					UpdateSeance={UpdateSeance}
					supp={supp}
				/>
				{isVisible && (
					<>
						{!updateMode ? (
							<>
								<Form>
									<FormGroup>
										<h3>
											<Label> Raison pour annulation </Label>
										</h3>
										<select
											value={raison}
											onChange={(e) => setRaison(e.target.value)}>
											<option value="r1">absence du joueur</option>
											<option value="r2">imptempérie</option>
										</select>
										<Button
											color="success"
											type="button"
											onClick={() => setUpdateMode(true)}>
											Envoyer
										</Button>
									</FormGroup>
								</Form>
							</>
						) : (
							<>
								<h5>Réponse envoyée!</h5>
							</>
						)}
					</>
				)}
			</>
		</div>
	);
}
