import { useState } from "react";
import { Heading } from "../../components/heading/Heading";
import ProgrammeSeanceForm from "../../components/programmeseanceform/ProgrammeSeanceForm";
import ProgrammeSeanceList from "../../components/programmeseancelist/ProgrammeSeanceList";

export default function ProgrammeSeancePage() {
	const [programmesSeance, setProgrammesSeance] = useState([
		{
			id: 1,
			titre: "learn Html",
			description: 5,
			technique: "IT",
			image: "sy",
			lienVideo: "1",
		},
		{
			id: 2,
			titre: "learn React",
			description: 5,
			technique: "IT",
			image: "sy",
			lienVideo: "1",
		},
		{
			id: 3,
			titre: "learn Angular",
			description: 5,
			technique: "IT",
			image: "sy",
			lienVideo: "1",
		},
	]);
	function addProgSeance(titre, description, technique, image, lienVideo) {
		setProgrammesSeance([
			...programmesSeance,
			{
				id: programmesSeance.length + 1,
				titre: titre,
				description: description,
				technique: technique,
				image: image,
				lienVideo: lienVideo,
			},
		]);
	}
	function UpdateProgSeance(
		id,
		titre,
		description,
		technique,
		image,
		lienVideo
	) {
		const newProgrammesSeance = programmesSeance.map((programmeSeance) =>
			programmeSeance.id === id
				? { id, titre, description, technique, image, lienVideo }
				: programmeSeance
		);
		setProgrammesSeance(newProgrammesSeance);
	}
	function deleteProgSeance(id) {
		setProgrammesSeance(programmesSeance.filter((index) => index.id !== id));
	}
	return (
		<div className="App">
			<>
				<Heading />
				<h2> Ajouter un programme séance</h2>
				<ProgrammeSeanceForm addProgSeance={addProgSeance} />
				<hr></hr>
				<h2> Liste des programmes séance </h2>
				<ProgrammeSeanceList
					programmesSeance={programmesSeance}
					UpdateProgSeance={UpdateProgSeance}
					deleteProgSeance={deleteProgSeance}
				/>
			</>
			)
		</div>
	);
}
