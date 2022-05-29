import { useState, useEffect } from "react";
import { NavbarJoueur } from "../../components/Navbar/NavbarJoueur";
import ModifierJoueurList from "../../components/modifierjoueurlist/modifierjoueurlist";
import { listPlayers } from "../../services/login.service";

export default function ModifierJoueurPage() {
	const [ModifierJoueur, setModifierJoueur] = useState([]);
	const [loading, setLoading] = useState(false);
	console.log(loading);
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
	useEffect(() => {
		const listPlayer = async () => {
			try {
				const res = await listPlayers();
				setModifierJoueur(res);
				setLoading(false);
				console.log(res);
			} catch (e) {
				console.log(e.response);
				setLoading(false);
			}
		};
		listPlayer();
	}, []);

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
