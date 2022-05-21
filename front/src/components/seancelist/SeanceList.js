import Seance from "../seance/Seance";

function SeanceList(props) {
	return (
		<div>
			{props.Seance.map(function (x) {
				return (
					<Seance
						key={x.id}
						id={x.id}
						titre={x.titre}
						joueur={x.joueur}
						horaire={x.horaire}
						date={x.date}
						lieu={x.lieu}
						competence={x.competence}
						objectif={x.objectif}
						statistique={x.statistique}
						progseance={x.progseance}
						UpdateSeance={props.UpdateSeance}
						deleteSeance={props.deleteSeance}
						supp={props.supp}
						avis={props.avis}
					/>
				);
			})}
		</div>
	);
}

export default SeanceList;
