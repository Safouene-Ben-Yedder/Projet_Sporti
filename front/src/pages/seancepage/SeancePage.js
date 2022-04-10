import { useState } from "react";
import { Heading } from "../../components/heading/Heading";
import SeanceForm from "../../components/seanceform/SeanceForm";
import SeanceList from "../../components/seancelist/SeanceList";

export default function SeancePage() {
	const [seances, setSeances] = useState([
		{
			id: 1,
			titre: "Foot",
			description: "Faire du football",
			date: "2022-04-06",
			competence: "Football",
			objectif: "améliorer les performances",
			aatteindre: "minimum 7 matches",
			horraire: "20:20",
			lieu: "Tunis",
			reccurente: true,
			periode: 25,
		},
		{
			id: 2,
			titre: "Basketball",
			description: "Faire de basketball",
			date: "2022-04-06",
			competence: "Basketball",
			objectif: "améliorer les performances",
			aatteindre: "minimum 7 matches",
			horraire: "20:20",
			lieu: "Tunis",
			reccurente: true,
			periode: 25,
		},
		{
			id: 3,
			titre: "Musculation",
			description: "Faire de musculation",
			date: "2022-04-06",
			competence: "Musculation",
			objectif: "améliorer les performances",
			aatteindre: "minimum 7 matches",
			horraire: "20:20",
			lieu: "Tunis",
			reccurente: true,
			periode: 25,
		},
	]);
	function addSeance(
		titre,
		description,
		date,
		competence,
		objectif,
		aatteindre,
		horraire,
		lieu,
		reccurente,
		periode
	) {
		setSeances([
			...seances,
			{
				id: seances.length + 1,
				titre: titre,
				description: description,
				date: date,
				competence: competence,
				objectif: objectif,
				aatteindre: aatteindre,
				horraire: horraire,
				lieu: lieu,
				reccurente: reccurente,
				periode: periode,
			},
		]);
	}
	function UpdateSeance(
		id,
		titre,
		description,
		date,
		competence,
		objectif,
		aatteindre,
		horraire,
		lieu,
		reccurente,
		periode
	) {
		const newSeances = seances.map((Seance) =>
			seance.id === id
				? {
						id,
						titre,
						description,
						date,
						competence,
						objectif,
						aatteindre,
						horraire,
						lieu,
						reccurente,
						periode,
				  }
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
