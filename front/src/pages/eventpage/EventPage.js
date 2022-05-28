/* eslint-disable */
import { useState, useEffect } from "react";
import { Heading } from "../../components/heading/Heading";
import EventForm from "../../components/eventform/EventForm";
import EventList from "../../components/eventlist/EventList";

import {
	postEvent,
	fetchEvent,
	updateEvent,
	deleteEvent,
} from "../../services/event.service";

export default function EventPage() {
	//	const [events, setEvents] = useState([
	/*	{
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
		},*/
	//	]);

	/*
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
	}  */

	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	// console.log(loading);

	useEffect(() => {
		const fetchEvents = async () => {
			if (loading) {
				try {
					const res = await fetchEvent();

					setEvents(res);
					setLoading(false);
					// console.log(res);
				} catch (e) {
					setLoading(false);
				}
			}
		};

		fetchEvents();
	}, [events]);

	const addEvents = async (nom, description, date, publique) => {
		const newEvent = await postEvent({ nom, description, date, publique });
		setEvents((Event) => [...Event, { ...newEvent }]);
	};
	const UpdateEvents = async (id, nom, description, publique, date) => {
		await updateEvent(id, nom, description, publique, date);
		const newEvent = events.map((Event) =>
			Event.id === id ? { id, nom, description, publique, date } : Event
		);
		setEvents(newEvent);
	};

	const deleteEvents = async (id) => {
		await deleteEvent(id);
		const newEvent = events.filter((Event) => Event._id !== id);
		setEvents(newEvent);
		//	setLoading(true);
	};

	return (
		<div className="App">
			<>
				<Heading />
				<h2> Ajouter un event</h2>
				<EventForm addEvent={addEvents} />
				<hr></hr>
				<h2> Liste des events </h2>
				{loading ? (
					"loading ...."
				) : (
					<EventList
						events={events}
						UpdateEvent={UpdateEvents}
						deleteEvent={deleteEvents}
						setLoading={setLoading}
					/>
				)}
			</>
		</div>
	);
}
