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
						description={x.description}
						date={x.date}
						competence={x.competence}
						objectif={x.objectif}
						reccurente={x.reccurente}
						lieu={x.lieu}
						aatteindre={x.aatteindre}
						periode={x.periode}
						horraire={x.horraire}
						UpdateSeance={props.UpdateSeance}
						deleteSeance={props.deleteSeance}
					/>
				);
			})}
		</div>
	);
}

export default SeanceList;
