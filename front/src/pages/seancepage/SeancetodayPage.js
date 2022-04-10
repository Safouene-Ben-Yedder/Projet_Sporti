import { useState } from "react";
import { Heading } from "../../components/heading/Heading";
import SeanceForm from "../../components/seanceform/SeanceForm";
import SeancetodayList from "../../components/seancelist/SeancetodayList";

export default function SeancetodayPage() {
	const [seances, setSeances] = useState([
		{
			id: 1,
			titre: "Foot",
			description: "Faire du football",
			date: "2022-04-10",
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

	return (
		<div className="App">
			<>
				<Heading />

				<h2> Liste des séances d'aujourd'hui </h2>

				<SeancetodayList seances={seances} />
			</>
			)
		</div>
	);
}
