import { useState } from "react";
import { NavbarJoueur} from "../../components/Navbar/NavbarJoueur";
import ModifierJoueurList from "../../components/modifierjoueurlist/modifierjoueurlist";

export default function ModifierJoueurPage() {
	const [ModifierJoueur, setModifierJoueur] = useState([
		{
			id: 1,
			Nom: "Foulen",
			Prenom: "Foulen",
			Actif: "Oui",
			Competence: "Competence1",
			Stat: "Stat1",
		},
		{
			id: 2,
			Nom: "Ben Foulen",
			Prenom: "Foulen",
			Actif: "Non",
			Competence: "Competence2",
			Stat: "Stat2",
		},
	]);
	// function addModifierJoueur(Nom, Prenom, Actif, Competence, Stat) {
	// 	setModifierJoueur([
	// 		...ModifierJoueur,
	// 		{
	// 			id: Stat.length + 1,
	// 			Nom: Nom,
	// 			Prenom: Prenom,
	// 			Actif: Actif,
	// 			Competence: Competence,
	// 			Stat: Stat,
	// 		},
	// 	]);
	// }
	function UpdateJoueur(id, Nom, Prenom, Actif, Competence, Stat) {
		const newModifierJoueur = ModifierJoueur.map((ModifierJoueur) =>
			ModifierJoueur.id === id
				? { id, Nom, Prenom, Actif, Competence, Stat }
				: ModifierJoueur
		);
		setModifierJoueur(newModifierJoueur);
	}
	function deleteJoueur(id) {
		setModifierJoueur(ModifierJoueur.filter((index) => index.id !== id));
	}
	return (
		<div className="App">
			<>
				<NavbarJoueur />
				<h2> Liste des Joueurs </h2>
				<ModifierJoueurList
					ModifierJoueur={ModifierJoueur}
					UpdateJoueur={UpdateJoueur}
					deleteJoueur={deleteJoueur}
				/>
			</>
		</div>
	);
}
