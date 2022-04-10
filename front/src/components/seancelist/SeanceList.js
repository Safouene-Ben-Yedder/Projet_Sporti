import Seance from "../seance/Seance";

function SeanceList(props) {
	return (
		<div>
			{props.seances.map(function (x) {
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
						statistique={x.statistique}
						UpdateSeance={props.UpdateSeance}
						deleteSeance={props.deleteSeance}
					/>
				);
			})}
		</div>
	);
}

export default SeanceList;
