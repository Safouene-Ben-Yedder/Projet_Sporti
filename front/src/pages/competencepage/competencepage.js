import { useState } from "react";
import CompetenceForm from "../../components/competenceform/competenceform";
import CompetenceList from "../../components/competencelist/competencelist";
import { Heading } from "../../components/heading/Heading";

export default function CompetencePage() {
	const [Competence, setCompetence] = useState([
		{
			id: 1,
			nom: "tennis",
			description: "tennis",
			lienVideo: "1",
			visible: true,
			rating: "5",
		},
	]);
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
				<Heading />
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
