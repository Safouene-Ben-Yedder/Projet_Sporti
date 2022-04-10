import { useState } from "react";
import { Button, Label } from "reactstrap";
import "./event.css";
export default function Event({
	key,
	nom,
	description,
	publique,
	date,
	UpdateEvent,
	id,
	deleteEvent,
	props,
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [NomtoUpdate, setNomtoUpdate] = useState(nom);
	const [descriptiontoUpdate, setDescriptiontoUpdate] = useState(description);
	const [publiquetoUpdate, setPubliquetoUpdate] = useState(publique);
	const [datetoUpdate, setDatetoUpdate] = useState(date);

	return (
		<div className="event">
			{!updateMode ? (
				<>
					<div className="nom">{nom}</div>
					<div className="description">{description} </div>
					<div>{publique}</div>
					<div>{date}</div>
					<div className="actions">
						<Button color="primary" onClick={() => setUpdateMode(true)}>
							Participer
						</Button>
						<Button color="danger" onClick={() => deleteEvent(id)}>
							Intéressé
						</Button>
					</div>
				</>
			) : (
				<div>
					<Label>
						nom
						<input
							type="text"
							name="event"
							value={NomtoUpdate}
							onChange={(e) => setNomtoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						description
						<input
							type="text"
							name="event"
							value={descriptiontoUpdate}
							onChange={(e) => setDescriptiontoUpdate(e.target.value)}
						/>
					</Label>
					<Label>
						{" "}
						publique
						<input
							type="checkbox"
							name="event"
							value={publiquetoUpdate}
							onChange={(e) => setPubliquetoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						date
						<input
							type="date"
							name="event"
							value={datetoUpdate}
							onChange={(e) => setDatetoUpdate(e.target.value)}
						/>{" "}
					</Label>
				</div>
			)}
		</div>
	);
}
