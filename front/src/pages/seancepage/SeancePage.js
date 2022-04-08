import { useState } from "react";
import { Heading } from "../../components/heading/Heading";
import SeanceForm from "../../components/seanceform/SeanceForm";
import SeanceList from "../../components/seancelist/SeanceList";

export default function SeancePage() {
	const [seances, setSeances] = useState([
		{
			id: 1,
			titre: "learn Html",
			description: 5,
			date: "IT",
			image: "sy",
			competence: "1",
			email: "s@gmail.com",
		},
		{
			id: 2,
			titre: "learn React",
			description: 5,
			date: "IT",
			image: "sy",
			competence: "1",
			email: "s@gmail.com",
		},
		{
			id: 3,
			titre: "learn Angular",
			description: 5,
			date: "IT",
			image: "sy",
			competence: "1",
			email: "s@gmail.com",
		},
	]);
	function addSeance(titre, description, date, image, competence) {
		setSeances([
			...seances,
			{
				id: seances.length + 1,
				titre: titre,
				description: description,
				date: date,
				image: image,
				competence: competence,
				email: email,
			},
		]);
	}
	function UpdateSeance(
		id,
		titre,
		description,
		date,
		image,
		competence,
		email
	) {
		const newSeances = seances.map((Seance) =>
			seance.id === id
				? { id, titre, description, date, image, competence, email }
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
