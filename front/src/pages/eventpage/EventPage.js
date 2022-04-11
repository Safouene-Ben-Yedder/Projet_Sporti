import { useState } from "react";
import { Heading } from "../../components/heading/Heading";
import EventForm from "../../components/eventform/EventForm";
import EventList from "../../components/eventlist/EventList";

export default function EventPage() {
	const [events, setEvents] = useState([
		{
			id: 1,
			nom: "Sport Day",
			description: "Gym Up",
			date: "2022-04-10",
			publique: true,
		},
		{
			id: 2,
			nom: "Sporti",
			description: "Gym Up",
			date: "2022-04-10",
			publique: true,
		},
		{
			id: 3,
			nom: "Gym Up",
			description: "Gym Up",
			date: "2022-04-10",
			publique: false,
		},
	]);
	function addEvent(nom, description, date, publique) {
		setEvents([
			...events,
			{
				id: events.length + 1,
				nom: nom,
				description: description,
				date: date,
				publique: publique,
			},
		]);
	}
	function UpdateEvent(id, nom, description, date, publique) {
		const newEvents = events.map((event) =>
			event.id === id ? { id, nom, description, date, publique } : event
		);
		setEvents(newEvents);
	}
	function deleteEvent(id) {
		setEvents(events.filter((index) => index.id !== id));
	}
	return (
		<div className="App">
			<>
				<Heading />
				<h2> Ajouter un event</h2>
				<EventForm addEvent={addEvent} />
				<hr></hr>
				<h2> Liste des events </h2>
				<EventList
					events={events}
					UpdateEvent={UpdateEvent}
					deleteEvent={deleteEvent}
				/>
			</>
			)
		</div>
	);
}
