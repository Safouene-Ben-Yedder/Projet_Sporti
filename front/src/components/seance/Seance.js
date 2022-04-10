import { useState } from "react";
import { Button, Label } from "reactstrap";
import "./seance.css";
export default function Seance({
	key,
	titre,
	description,
	date,
	UpdateSeance,
	competence,
	objectif,
	aatteindre,
	horraire,
	lieu,
	reccurente,
	periode,
	id,
	deleteSeance,
	props,
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [TitletoUpdate, setTitletoUpdate] = useState(titre);
	const [descriptiontoUpdate, setDescriptiontoUpdate] = useState(description);
	const [datetoUpdate, setDatetoUpdate] = useState(date);
	const [competencetoUpdate, setCompetencetoUpdate] = useState(competence);

	const [objectiftoUpdate, setObjectiftoUpdate] = useState(objectif);
	const [aatteindretoUpdate, setAatteindretoUpdate] = useState(aatteindre);
	const [horrairetoUpdate, setHorrairetoUpdate] = useState(horraire);
	const [lieutoUpdate, setLieutoUpdate] = useState(lieu);
	const [reccurentetoUpdate, setReccurentetoUpdate] = useState(reccurente);
	const [periodetoUpdate, setPeriodetoUpdate] = useState(periode);

	return (
		<div className="Seance">
			{!updateMode ? (
				<>
					<div className="titre">{titre}</div>
					<div className="description">{description}</div>
					<div className="date">{date}</div>
					<div className="competence">{competence}</div>

					<div className="objectif">{objectif}</div>
					<div className="aatteindre">{aatteindre}</div>
					<div className="horraire">{horraire}</div>
					<div className="lieu">{lieu}</div>
					<div className="reccurente">{reccurente}</div>
					<div className="periode">{periode}</div>

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
							type="date"
							name="Seance"
							value={datetoUpdate}
							onChange={(e) => setDatetoUpdate(e.target.value)}
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
						Objectif
						<input
							type="text"
							name="Seance"
							value={objectiftoUpdate}
							onChange={(e) => setObjectiftoUpdate(e.target.value)}
						/>
					</Label>

					<Label>
						{" "}
						Goal a atteindre
						<input
							type="text"
							name="Seance"
							value={aatteindretoUpdate}
							onChange={(e) => setAatteindretoUpdate(e.target.value)}
						/>
					</Label>

					<Label>
						{" "}
						Horraire
						<input
							type="time"
							name="Seance"
							value={horrairetoUpdate}
							onChange={(e) => setHorrairetoUpdate(e.target.value)}
						/>
					</Label>

					<Label>
						{" "}
						Lieu
						<input
							type="text"
							name="Seance"
							value={lieutoUpdate}
							onChange={(e) => setLieutoUpdate(e.target.value)}
						/>
					</Label>

					<Label>
						{" "}
						Reccurente
						<input
							type="checkbox"
							name="Seance"
							value={reccurentetoUpdate}
							onChange={(e) => setReccurentetoUpdate(e.target.value)}
						/>
					</Label>

					<Label>
						{" "}
						Periode
						<input
							type="range"
							name="Seance"
							min="0"
							max="12"
							value={periodetoUpdate}
							onChange={(e) => setPeriodetoUpdate(e.target.value)}
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
								competencetoUpdate,

								objectiftoUpdate,
								aatteindretoUpdate,
								horrairetoUpdate,
								lieutoUpdate,
								reccurentetoUpdate,
								periodetoUpdate
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
