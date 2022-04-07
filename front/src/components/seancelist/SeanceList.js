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
						image={x.image}
						competence={x.competence}
						UpdateSeance={props.UpdateSeance}
						deleteSeance={props.deleteSeance}
					/>
				);
			})}
		</div>
	);
}

export default SeanceList;
