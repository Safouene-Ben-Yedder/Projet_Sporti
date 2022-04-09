import ModifierJoueur from "../modifierjoueur/modifierjoueur";

function ModifierJoueurList(props) {
	return (
		<div>
			{props.ModifierJoueur.map(function (x) {
				return (
					<ModifierJoueur
						id={x.id}
						Nom={x.Nom}
						Prenom={x.Prenom}
						Actif={x.Actif}
						Competence={x.Competence}
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
