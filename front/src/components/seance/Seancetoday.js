import { useState } from "react";
import { Button, Label } from "reactstrap";
import "./seance.css";
export default function Seancetoday({
	titre,
	joueur,
	horaire,
	date,
	lieu,
	UpdateSeance,
	competence,
	statistique,
	objectif,
	progseance,
	id,
	deleteSeance,
	supp,
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [TitletoUpdate, setTitletoUpdate] = useState(titre);
	const [joueurtoUpdate, setJoueurToUpdate] = useState(joueur);
	const [horairetoUpdate, setHorairetoUpdate] = useState(horaire);
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
					<div className="horaire">{horaire}</div>
					<div>{date} </div>
					<div> {lieu} </div>
					<div> {competence} </div>
					<div> {objectif} </div>
					<div> {statistique}</div>
					<div>{progseance}</div>
					<div className="actions"></div>
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
							onChange={(e) => setJoueurToUpdate(e.target.value)}
						/>
					</Label>
					<Label>
						{" "}
						horaire
						<input
							type="time"
							name="Seance"
							value={horairetoUpdate}
							onChange={(e) => setHorairetoUpdate(e.target.value)}
						/>
					</Label>
					<Label>
						{" "}
						date
						<input
							type="Date"
							name="Seance"
							value={datetoUpdate}
							onChange={(e) => setDatetoUpdate(e.target.value)}
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
						<select onChange={(e) => setLieutoUpdate(e.lieutoUpdate)}>
							<option>{lieutoUpdate} </option>
							<option value="30 secondes">30 secondes </option>
							<option value="40 secondes">40 secondes </option>
							<option value="60 secondes">60 secondes </option>
						</select>
					</Label>
					<Label>
						{" "}
						competence
						<select onChange={(e) => setCompetencetoUpdate(e.target.value)}>
							<option>{competencetoUpdate} </option>
							<option value="30 secondes">30 secondes </option>
							<option value="40 secondes">40 secondes </option>
							<option value="60 secondes">60 secondes </option>
						</select>
					</Label>
					<Label>
						{" "}
						Statistiques
						<select onChange={(e) => setStatistiqueToUpdate(e.target.value)}>
							<option>{statistiqueToUpdate} </option>
							<option value="respiration">respiration </option>
							<option value="200 mètres">200 mètres</option>
							<option value="100 mètres">100 mètres</option>
						</select>
					</Label>
					<Label>
						{" "}
						Programme Seance
						<select onChange={(e) => setProgseancetoUpdate(e.target.value)}>
							<option>{progseanceToUpdate} </option>
							<option value="Programme 1">Programme 1 </option>
							<option value="Programme 2">Programme 2</option>
							<option value="Programme 3">Programme 3</option>
						</select>
					</Label>
				</div>
			)}
		</div>
	);
}
