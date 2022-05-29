import { useState } from "react";
import { Button, Label } from "reactstrap";
import "./seance.css";
export default function Seance({
	id,
	titre,
	description,
	date,
	joueur,
	objectif,
	lieu,
	progseance,
	competence,
	statistique,
	UpdateSeance,

	deleteSeance,
	supp,
	avis,
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [TitletoUpdate, setTitletoUpdate] = useState(titre);
	const [joueurtoUpdate, setJoueurToUpdate] = useState(joueur);
	const [descriptiontoUpdate, setDescriptiontoUpdate] = useState(description);
	const [datetoUpdate, setDatetoUpdate] = useState(date);
	const [lieutoUpdate, setLieutoUpdate] = useState(lieu);
	const [competencetoUpdate, setCompetencetoUpdate] = useState(competence);
	const [objectiftoUpdate, setObjectiftoUpdate] = useState(objectif);
	const [progseanceToUpdate, setProgseancetoUpdate] = useState(progseance);
	const [statistiqueToUpdate, setStatistiqueToUpdate] = useState(statistique);

	return (
		<div className="Seance">
			{!updateMode ? (
				<>
					<div className="titre">{titre}</div>
					<div className="joueur">{joueur}</div>
					<div className="description">{description}</div>
					<div>{date} </div>
					<div> {lieu} </div>
					<div> {competence} </div>
					<div> {objectif} </div>
					<div> {statistique}</div>
					<div>{progseance}</div>

					<div className="actions">
						<Button color="primary" onClick={() => setUpdateMode(true)}>
							Modifier
						</Button>
						<Button
							color="danger"
							onClick={() => {
								deleteSeance(id);
								supp();
							}}>
							Annuler
						</Button>
						<Button color="success" onClick={() => avis()}>
							Donner FeedBack
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
						Joueur
						<input
							type="text"
							name="Seance"
							value={joueurtoUpdate}
							onChange={() => setJoueurToUpdate("6286d2719814ad2c3b5a3e58")}
						/>
					</Label>
					<Label>
						{" "}
						description
						<input
							type="text"
							name="Seance"
							value={descriptiontoUpdate}
							onChange={() => setDescriptiontoUpdate("ss")}
						/>
					</Label>
					<Label>
						{" "}
						date
						<input
							type="Date"
							name="Seance"
							value={datetoUpdate}
							onChange={() => setDatetoUpdate("2004-03-01")}
						/>{" "}
					</Label>
					<Label>
						{" "}
						Objectif
						<input
							type="text"
							name="objectif"
							value={objectiftoUpdate}
							onChange={(e) => setObjectiftoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						lieu
						<select
							onChange={() => setLieutoUpdate("6286d2719814ad2c3b5a3e58")}>
							<option>{lieutoUpdate} </option>
							<option value="30 secondes">30 secondes </option>
							<option value="40 secondes">40 secondes </option>
							<option value="60 secondes">60 secondes </option>
						</select>
					</Label>
					<Label>
						{" "}
						competence
						<select
							onChange={() =>
								setCompetencetoUpdate("62865184c4b6faffc61c7634")
							}>
							<option>{competencetoUpdate} </option>
							<option value="30 secondes">30 secondes </option>
							<option value="40 secondes">40 secondes </option>
							<option value="60 secondes">60 secondes </option>
						</select>
					</Label>
					<Label>
						{" "}
						Statistiques
						<select
							onChange={() =>
								setStatistiqueToUpdate("6288243e437599ed76d62504")
							}>
							<option>{statistiqueToUpdate} </option>
							<option value="respiration">respiration </option>
							<option value="200 mètres">200 mètres</option>
							<option value="100 mètres">100 mètres</option>
						</select>
					</Label>

					<Label>
						{" "}
						Programme Seance
						<select
							onChange={() =>
								setProgseancetoUpdate("6286ec836b3d82008a3d8273")
							}>
							<option>{progseanceToUpdate} </option>
							<option value="Programme 1">Programme 1 </option>
							<option value="Programme 2">Programme 2</option>
							<option value="Programme 3">Programme 3</option>
						</select>
					</Label>
					<Button
						color="primary"
						type="button"
						onClick={() => {
							UpdateSeance(
								id,
								TitletoUpdate,
								descriptiontoUpdate,
								datetoUpdate,
								joueurtoUpdate,
								objectiftoUpdate,
								lieutoUpdate,
								progseanceToUpdate,
								competencetoUpdate,
								statistiqueToUpdate
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
