import Event from "../event/Event";

function EventList(props) {
	console.log(props);
	return (
		<div>
			{props.events.map(function (x) {
				return (
					<Event
						key={x._id}
						id={x._id}
						nom={x.nom}
						description={x.description}
						date={x.date.slice(0, 10)}
						publique={x.publique.toString()}
						UpdateEvent={props.UpdateEvent}
						deleteEvent={props.deleteEvent}
						setLoading={props.setLoading}
					/>
				);
			})}
		</div>
	);
}

export default EventList;
