import Seance from "../seance/Seancetoday";

function SeancetodayList(props) {
	let today = new Date().toISOString().slice(0, 10);

	console.log(today.toString());
	console.log(props.seances);

	return (
		<div>
			{props.seances
				.filter(function (d) {
					return d.date == today;
				})
				.map(function (x) {
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
							progseance={x.progseance}
							statistique={x.statistique}
						/>
					);
				})}
		</div>
	);
}

export default SeancetodayList;
