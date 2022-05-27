import { useState } from "react";
import { Label, Button, Input } from "reactstrap";
import "./defi.css";
export default function Defi({
	nom,
	description,
	objectif,
	UpdateDefi,
	lienVideo,
	id,
	deleteDefi,
	assigner,
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [doneMode, setDoneMode] = useState(false);
	const [NomtoUpdate, setNomtoUpdate] = useState(nom);
	const [descriptiontoUpdate, setDescriptiontoUpdate] = useState(description);
	const [objectiftoUpdate, setObjectiftoUpdate] = useState(objectif);
	const [lienVideotoUpdate, setLienVideotoUpdate] = useState(lienVideo);

	return (
		<div className="defi">
			{!updateMode ? (
				<>
					{!doneMode ? (
						<div>
							<div className="nom">{nom}</div>
							<div className="description">{description}</div>
							{objectif}
							{lienVideo}
							<div className="actions">
								<Button color="primary" onClick={() => setUpdateMode(true)}>
									Modifier
								</Button>
								<Button color="danger" onClick={() => deleteDefi(id)}>
									Supprimer
								</Button>
								<Button color="success" onClick={() => assigner()}>
									Assigner défi
								</Button>
								<Button color="warning" onClick={() => setDoneMode(true)}>
									Done
								</Button>
							</div>
						</div>
					) : (
						<div>
							<div className="nom">{nom}</div>
							<div className="description">{description}</div>
							{objectif}
							{lienVideo}
							<div className="actions">
								<Button color="primary" onClick={() => setUpdateMode(true)}>
									Modifier
								</Button>
								<Button color="danger" onClick={() => deleteDefi(id)}>
									Supprimer
								</Button>
								<Button color="success" onClick={() => assigner()}>
									Assigner défi
								</Button>
								<Input value="DONE" valid disabled />
							</div>
						</div>
					)}
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
								//Number(id),
								id,
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
