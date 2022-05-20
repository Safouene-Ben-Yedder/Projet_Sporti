import { useEffect, useState } from "react";
import {
	fetchProg,
	postProg,
	updateProg,
	deleteProg,
} from "../../services/progSeance.service";
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
				const res = await fetchProg();
				setProgrammesSeance(res);
				setLoading(false);
				console.log(res);
			} catch (e) {
				setLoading(false);
			}
		};
		fetchProgrammes();
	}, []);

	const addProgSeance = async (
		titre,
		description,
		technique,
		image,
		lienVideo
	) => {
		const newProg = await postProg({
			titre,
			description,
			image,
			lienVideo,
			technique,
		});
		setProgrammesSeance((Prog) => [...Prog, { ...newProg }]);
	};

	const UpdateProgSeance = async (
		id,
		titre,
		description,
		technique,
		image,
		lienVideo
	) => {
		await updateProg(id, titre, description, image, lienVideo, technique);
		const newProg = programmesSeance.map((programmesSeance) =>
			programmesSeance.id === id
				? { id, titre, description, image, lienVideo, technique }
				: programmesSeance
		);
		setProgrammesSeance(newProg);
	};

	const deleteProgSeance = async (id) => {
		await deleteProg(id);
		setProgrammesSeance(
			programmesSeance.filter((programmesSeance) => programmesSeance.id !== id)
		);
	};
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
		</div>
	);
}
