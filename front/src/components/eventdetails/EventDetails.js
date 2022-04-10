import { ListGroup, ListGroupItem } from "reactstrap";
export default function EventDetails() {
	const events = [
		{
			id: 1,
			nom: "Sport Day",
			description: "Gym Up",
			date: "2022-04-10",
			publique: true,
		},
	];

	return (
		<div>
			{events.map((event) => (
				<ListGroup>
					<ListGroupItem>
						<div className="bold">id : {event.id}</div>
					</ListGroupItem>
					<ListGroupItem>
						<div className="bold">Nom : {event.nom}</div>
					</ListGroupItem>
					<ListGroupItem>
						<div className="bold">Description {event.description}</div>
					</ListGroupItem>
					<ListGroupItem>
						<div className="bold">Date : {event.date}</div>
					</ListGroupItem>
					<ListGroupItem>
						<div className="bold">Publique: {event.publique}</div>
					</ListGroupItem>
				</ListGroup>
			))}
		</div>
	);
}
