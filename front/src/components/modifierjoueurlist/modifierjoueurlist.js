import ModifierJoueur from "../modifierjoueur/modifierjoueur";

function ModifierJoueurList(props) {
	return (
		<div>
			{props.ModifierJoueur.map(function (x) {
				return (
					<ModifierJoueur
						id={x._id}
						nom={x.nom}
						prenom={x.prenom}
						dateNaissance={x.dateNaissance}
						email={x.email}
						telephone={x.telephone}
						poids={x.poids}
						taille={x.taille}
						droit={x.droit}
						IMC={x.IMC}
						abonnement={x.abonnement}
						// Actif={x.Actif}
						Competences={x.Competences}
						Stat={x.Stat}
						UpdateJoueur={props.UpdateJoueur}
						deleteJoueur={props.deleteJoueur}
					/>
				);
			})}
		</div>
	);
}

export default ModifierJoueurList;
