import { useState } from "react";
import { Heading } from "../../components/heading/Heading";
import SeanceForm from "../../components/seanceform/SeanceForm";
import SeanceList from "../../components/seancelist/SeanceList";

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
			statistique: "100 mètres",
		},
	]);
	function addSeance(
		titre,
		joueur,
		horaire,
		date,
		lieu,
		competence,
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
		statistique
	) {
		const newSeances = seances.map((seance) =>
			seance.id === id
				? { id, titre, joueur, horaire, date, lieu, competence, statistique }
				: seance
		);
		setSeances(newSeances);
	}
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
					UpdateSeance={UpdateSeance}
					deleteSeance={deleteSeance}
				/>
			</>
			)
		</div>
	);
}
