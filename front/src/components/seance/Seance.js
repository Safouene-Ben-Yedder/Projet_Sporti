import { useState } from "react";
import { Button, Label } from "reactstrap";
import "./seance.css";
export default function Seance({
	key,
	titre,
	description,
	date,
	image,
	UpdateSeance,
	competence,
	email,
	id,
	deleteSeance,
	props,
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [TitletoUpdate, setTitletoUpdate] = useState(titre);
	const [descriptiontoUpdate, setDescriptiontoUpdate] = useState(description);
	const [datetoUpdate, setDatetoUpdate] = useState(date);
	const [imagetoUpdate, setImagetoUpdate] = useState(image);
	const [competencetoUpdate, setCompetencetoUpdate] = useState(competence);
	const [emailtoUpdate, setEmailtoUpdate] = useState(email);

	//nkfnlkznlkfjzlkeflkz,flkez,
	return (
		<div className="Seance">
			{!updateMode ? (
				<>
					<div className="titre">{titre}</div>
					<div className="description">{description} mn</div>
					{date}
					{image}
					{competence}
					<div className="actions">
						<Button color="primary" onClick={() => setUpdateMode(true)}>
							Modifier
						</Button>
						<Button color="danger" onClick={() => deleteSeance(id)}>
							Supprimer
						</Button>
					</div>
				</>
			) : (
				<div>
					<Label>
						titre
						<input
							type="text"
							name="Seance"
							value={TitletoUpdate}
							onChange={(e) => setTitletoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						description
						<input
							type="text"
							name="Seance"
							value={descriptiontoUpdate}
							onChange={(e) => setDescriptiontoUpdate(e.target.value)}
						/>
					</Label>
					<Label>
						{" "}
						date
						<input
							type="text"
							name="Seance"
							value={datetoUpdate}
							onChange={(e) => setDatetoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						Image
						<input
							type="text"
							name="Seance"
							value={imagetoUpdate}
							onChange={(e) => setImagetoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						competence
						<input
							type="text"
							name="Seance"
							value={competencetoUpdate}
							onChange={(e) => setCompetencetoUpdate(e.target.value)}
						/>
					</Label>

					<Label>
						{" "}
						Email
						<input
							type="text"
							name="Seance"
							value={emailtoUpdate}
							onChange={(e) => setEmailtoUpdate(e.target.value)}
						/>
					</Label>

					<Button
						color="primary"
						type="button"
						onClick={() => {
							UpdateSeance(
								Number(id),
								TitletoUpdate,
								descriptiontoUpdate,
								datetoUpdate,
								imagetoUpdate,
								competencetoUpdate,
								emailtoUpdate
							);
							setUpdateMode(false);
						}}>
						Update
					</Button>
				</div>
			)}
		</div>
	);
}
