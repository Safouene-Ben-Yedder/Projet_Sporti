import { useState } from "react";
import { Button, Label } from "reactstrap";
import "./defi.css";
export default function Defi({
	key,
	nom,
	description,
	objectif,
	UpdateDefi,
	lienVideo,
	id,
	deleteDefi,
	props,
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [NomtoUpdate, setNomtoUpdate] = useState(nom);
	const [descriptiontoUpdate, setDescriptiontoUpdate] = useState(description);
	const [objectiftoUpdate, setObjectiftoUpdate] = useState(objectif);
	const [lienVideotoUpdate, setLienVideotoUpdate] = useState(lienVideo);

	return (
		<div className="defi">
			{!updateMode ? (
				<>
					<div className="nom">{nom}</div>
					<div className="description">{description} mn</div>
					{objectif}
					{lienVideo}
					<div className="actions">
						<Button color="primary" onClick={() => setUpdateMode(true)}>
							Modifier
						</Button>
						<Button color="danger" onClick={() => deleteDefi(id)}>
							Supprimer
						</Button>
					</div>
				</>
			) : (
				<div>
					<Label>
						nom
						<input
							type="text"
							name="defi"
							value={NomtoUpdate}
							onChange={(e) => setNomtoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						description
						<input
							type="text"
							name="defi"
							value={descriptiontoUpdate}
							onChange={(e) => setDescriptiontoUpdate(e.target.value)}
						/>
					</Label>
					<Label>
						{" "}
						objectif
						<input
							type="text"
							name="defi"
							value={objectiftoUpdate}
							onChange={(e) => setObjectiftoUpdate(e.target.value)}
						/>{" "}
					</Label>

					<Label>
						{" "}
						lien vidéo
						<input
							type="text"
							name="defi"
							value={lienVideotoUpdate}
							onChange={(e) => setLienVideotoUpdate(e.target.value)}
						/>
					</Label>

					<Button
						color="primary"
						type="button"
						onClick={() => {
							UpdateDefi(
								Number(id),
								NomtoUpdate,
								descriptiontoUpdate,
								objectiftoUpdate,
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
