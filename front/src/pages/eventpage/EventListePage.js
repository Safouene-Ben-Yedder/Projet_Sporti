import { useState } from "react";
import { Heading } from "../../components/heading/Heading";
import EventForm from "../../components/eventform/EventForm";
import EventListe from "../../components/eventlist/EventListe";

export default function EventListePage() {
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

	return (
		<div className="App">
			<>
				<Heading />

				<h2> Liste des events </h2>
				<EventListe events={events} />
			</>
			)
		</div>
	);
}
