import { useEffect, useState } from "react";
import axios from "axios";

import { Heading } from "../../components/heading/Heading";
import ProgrammeSeanceForm from "../../components/programmeseanceform/ProgrammeSeanceForm";
import ProgrammeSeanceList from "../../components/programmeseancelist/ProgrammeSeanceList";
import "./programmepage.css";
export default function ProgrammeSeancePage() {
	const [programmesSeance, setProgrammesSeance] = useState([]);
	const [loading, setLoading] = useState(false);
	console.log(loading);

	useEffect(() => {
		const fetchProgrammes = async () => {
			setLoading(true);
			try {
				const res = await axios.get(
					"http://localhost:5000/api/programmeseance/coach/findAll/:token"
				);
				setProgrammesSeance(res.data);
				setLoading(false);
				console.log(res);
			} catch (e) {
				setLoading(false);
			}
		};
		fetchProgrammes();
	}, []);

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
