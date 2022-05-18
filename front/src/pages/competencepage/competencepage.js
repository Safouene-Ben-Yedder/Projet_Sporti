import { useState, useEffect } from "react";
import CompetenceForm from "../../components/competenceform/competenceform";
import CompetenceList from "../../components/competencelist/competencelist";
import { NavbarJoueur } from "../../components/Navbar/NavbarJoueur";
import { fetchCompetence } from "../../services/competence.service";

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
				setError("An error occurred when we tried to fetch tasks");
			}
		};
		console.log("useEffect");

		fetchData();
	}, []);
	function addCompetence(nom, description, lienVideo, visible, rating) {
		setCompetence([
			...Competence,
			{
				id: Competence.length + 1,
				nom: nom,
				description: description,
				lienVideo: lienVideo,
				visible: visible,
				rating: rating,
			},
		]);
	}
	function UpdateCompetence(id, nom, description, lienVideo, visible, rating) {
		const newCompetence = Competence.map((Competence) =>
			Competence.id === id
				? { id, nom, description, lienVideo, visible, rating }
				: Competence
		);
		setCompetence(newCompetence);
	}
	function deleteCompetence(id) {
		setCompetence(Competence.filter((index) => index.id !== id));
	}
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
