import Evente from "../event/Evente";

function EventListe(props) {
	return (
		<div>
			{props.events.map(function (x) {
				return (
					<Evente
						key={x.id}
						id={x.id}
						nom={x.nom}
						description={x.description}
						date={x.date}
						publique={x.publique.toString()}
					/>
				);
			})}
		</div>
	);
}

export default EventListe;
