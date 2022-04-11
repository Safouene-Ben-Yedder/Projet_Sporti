import React from "react";
import ProfilJoueur from "../../components/profileJoueur/ProfileJoueur";
import { NavbarJoueur } from "../../components/Navbar/NavbarJoueur";
import { EspaceSeance } from "../../components/espaceSeance/EspaceSeance";
export const EspaceSeancePage = () => {
	return (
		<>
			<NavbarJoueur />
			<h2>Profil Joueur</h2>
			<ProfilJoueur />
			<br />
			<br />
			<div>
				<h2>Aujourd'hui Vous avez les séance(s) suivante(s)</h2>
				<EspaceSeance />
			</div>
		</>
	);
};
