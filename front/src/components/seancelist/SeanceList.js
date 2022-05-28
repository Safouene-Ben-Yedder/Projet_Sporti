import Seance from "../seance/Seance";

function SeanceList(props) {
	return (
		<div>
			{props.seances.map(function (x) {
				return (
					<Seance
						key={x._id}
						id={x._id}
						titre={x.titre}
						description={x.description}
						joueur={x.joueur}
						date={x.date.slice(0, 10)}
						objectif={x.objectif}
						competence={x.competence}
						statistique={x.statistique}
						lieu={x.lieu}
						progseance={x.progseance}
						//	horaire={x.horaire}
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
