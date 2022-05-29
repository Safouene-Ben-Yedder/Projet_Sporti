import { useState, useEffect } from "react";
import CompetenceForm from "../../components/competenceform/competenceform";
import CompetenceList from "../../components/competencelist/competencelist";
import { NavbarJoueur } from "../../components/Navbar/NavbarJoueur";
import {
	DelCompetence,
	fetchCompetence,
	UpCompetence,
} from "../../services/competence.service";
import { addCompetence as newCompetence } from "../../services/competence.service";
export default function CompetencePage() {
	const [Competence, setCompetence] = useState([]);
	const [error, setError] = useState();
	console.log(error);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await fetchCompetence();
				setCompetence(result);
			} catch (e) {
				setError("An error occurred when we tried to fetch data");
			}
		};
		console.log("useEffect");

		fetchData();
	}, [Competence]);
	const addCompetence = async (nom, description, lien, visible, rating) => {
		try {
			const result = await newCompetence({
				nom,
				description,
				lien,
				visible,
				rating,
			});
			console.log(result);
			setCompetence([
				...Competence,
				{
					...result,
				},
			]);
		} catch (e) {
			setError("An error occurred when we tried to post");
		}
	};
	const UpdateCompetence = async (
		id,
		nom,
		description,
		lien,
		visible,
		rating
	) => {
		await UpCompetence(id, { nom, description, lien, visible, rating });
		const UpdatedCompetence = Competence.map((Competence) =>
			Competence.id === id
				? { nom, description, lien, visible, rating }
				: Competence
		);
		setCompetence(UpdatedCompetence);
		console.log(id);
	};

	const deleteCompetence = async (id) => {
		await DelCompetence(id);
		setCompetence(Competence.filter((index) => index.id !== id));
	};
	return (
		<div className="App">
			<>
				<NavbarJoueur />
				<h2> Ajouter une Competence</h2>
				<CompetenceForm addComp={addCompetence} />
				<hr></hr>
				<h2> Liste des Competences </h2>
				<CompetenceList
					Competence={Competence}
					UpdateCompetence={UpdateCompetence}
					deleteCompetence={deleteCompetence}
				/>
			</>
		</div>
	);
}
