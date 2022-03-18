import { useState } from "react";
import { Button, Label } from "reactstrap";
import "./programmeseance.css";
export default function ProgrammeSeance({
	key,
	titre,
	description,
	technique,
	image,
	UpdateProgSeance,
	lienVideo,
	id,
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [TitletoUpdate, setTitletoUpdate] = useState(titre);
	const [descriptiontoUpdate, setDescriptiontoUpdate] = useState(description);
	const [techniquetoUpdate, setTechniquetoUpdate] = useState(technique);
	const [imagetoUpdate, setImagetoUpdate] = useState(image);
	const [lienVideotoUpdate, setLienVideotoUpdate] = useState(lienVideo);

	return (
		<div className="programmeSeance">
			{!updateMode ? (
				<>
					<div className="titre">{titre}</div>
					<div className="description">{description} mn</div>
					{technique}
					{image}
					{lienVideo}
					<div className="actions">
						<Button color="primary" onClick={() => setUpdateMode(true)}>
							Modifier
						</Button>
						<Button color="danger">Supprimer</Button>
					</div>
				</>
			) : (
				<div>
					<Label>
						titre
						<input
							type="text"
							name="programmeSeance"
							value={TitletoUpdate}
							onChange={(e) => setTitletoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						description
						<input
							type="text"
							name="programmeSeance"
							value={descriptiontoUpdate}
							onChange={(e) => setDescriptiontoUpdate(e.target.value)}
						/>
					</Label>
					<Label>
						{" "}
						Technique
						<input
							type="text"
							name="programmeSeance"
							value={techniquetoUpdate}
							onChange={(e) => setTechniquetoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						Image
						<input
							type="text"
							name="programmeSeance"
							value={imagetoUpdate}
							onChange={(e) => setImagetoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						lien vidéo
						<input
							type="text"
							name="programmeSeance"
							value={lienVideotoUpdate}
							onChange={(e) => setLienVideotoUpdate(e.target.value)}
						/>
					</Label>

					<Button
						color="primary"
						type="button"
						onClick={() => {
							UpdateProgSeance(
								Number(id),
								TitletoUpdate,
								descriptiontoUpdate,
								techniquetoUpdate,
								imagetoUpdate,
								lienVideotoUpdate
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
