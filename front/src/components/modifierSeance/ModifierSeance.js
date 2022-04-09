import React from "react";
import { useState } from "react";
import { Button, Label } from "reactstrap";

export default function ModifierSeance({
	key,
	titre,
	description,
	date,
	image,
	UpdateSeance,
	competence,
	id,
}) {
	const [TitletoUpdate, setTitletoUpdate] = useState(titre);
	const [descriptiontoUpdate, setDescriptiontoUpdate] = useState(description);
	const [datetoUpdate, setDatetoUpdate] = useState(date);
	const [imagetoUpdate, setImagetoUpdate] = useState(image);
	const [competencetoUpdate, setCompetencetoUpdate] = useState(competence);
	return (
		<div className="Seance">
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
							competencetoUpdate
						);
					}}>
					Update
				</Button>
			</div>
		</div>
	);
}
