import { useState } from "react";
import { Heading } from "../../components/heading/Heading";
import ProgrammeSeanceForm from "../../components/programmeseanceform/ProgrammeSeanceForm";
import ProgrammeSeanceList from "../../components/programmeseancelist/ProgrammeSeanceList";
import "./programmepage.css";
export default function ProgrammeSeancePage() {
	const [programmesSeance, setProgrammesSeance] = useState([
		{
			id: 1,
			titre: "tennis",
			description: "pratiquer de la tennis",
			technique: "un deux",
			image: "Tennis",
			lienVideo: "Tennis",
		},
		{
			id: 2,
			titre: "yoga",
			description: "pratique de la bonne respiration",
			technique: "sketching",
			image: "Yoga",
			lienVideo: "Yoga",
		},
		{
			id: 3,
			titre: "musculation",
			description: "Poids 50 kg",
			technique: "Jambes",
			image: "Musculation",
			lienVideo: "Musculation",
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
				<h2 className="titre"> Ajouter un programme séance</h2>
				<ProgrammeSeanceForm addProgSeance={addProgSeance} />
				<hr></hr>
				<h2 className="titre"> Liste des programmes séance </h2>
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
