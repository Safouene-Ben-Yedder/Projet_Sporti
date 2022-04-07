import Event from "../event/Event";

function EventList(props) {
	return (
		<div>
			{props.events.map(function (x) {
				return (
					<Event
						key={x.id}
						id={x.id}
						nom={x.nom}
						description={x.description}
						date={x.date}
						publique={x.publique}
						UpdateEvent={props.UpdateEvent}
						deleteEvent={props.deleteEvent}
					/>
				);
			})}
		</div>
	);
}

export default EventList;
