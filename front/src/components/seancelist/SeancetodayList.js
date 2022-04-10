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
							description={x.description}
							date={x.date}
							competence={x.competence}
							objectif={x.objectif}
							reccurente={x.reccurente}
							lieu={x.lieu}
							aatteindre={x.aatteindre}
							periode={x.periode}
							horraire={x.horraire}
						/>
					);
				})}
		</div>
	);
}

export default SeancetodayList;
