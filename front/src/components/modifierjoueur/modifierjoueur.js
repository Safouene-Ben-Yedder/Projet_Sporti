import { useState } from "react";
import { Button, Label} from "reactstrap";
import { Link } from "react-router-dom";

export default function ModifierJoueur({
	Nom,
	Prenom,
	Actif,
	UpdateJoueur,
	Competence,
	id,
	Stat,
	deleteJoueur,


}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [NomtoUpdate, setNomtoUpdate] = useState(Nom);
	const [PrenomtoUpdate, setPrenomtoUpdate] = useState(Prenom);
	const [ActiftoUpdate, setActiftoUpdate] = useState(Actif);
	const [CompetencetoUpdate, setCompetencetoUpdate] = useState(Competence);
	const [StattoUpdate, setStattoUpdate] = useState(Stat);

	return (
		<div className="ModifJoueur">
			{!updateMode ? (
				<>
					<h1>Joueur {id}</h1>
					<div className="Nom">Nom : {Nom}</div>
					<div className="Prenom">Prenom : {Prenom} </div>
					<div className="Actif">Actif : {Actif}</div>
					<div className="Competence">Competence: {Competence}</div>
					<div className="Stat">Statistique: {Stat}</div>

					<div className="actions">
						<Button color="primary" onClick={() => setUpdateMode(true)}>
							Modifier
						</Button>
						<Button color="danger" onClick={() => deleteJoueur(id)}>
							Supprimer
						</Button>
						<Link className="link" to="/profileJoueur">
							aller au profil
						</Link>
					</div>
				</>
			) : (
				<div>
					<Label>
						Nom
						<input
							type="text"
							name="Nom"
							value={Nom}
							onChange={(e) => setNomtoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						Prenom
						<input
							type="text"
							name="Prenom"
							value={PrenomtoUpdate}
							onChange={(e) => setPrenomtoUpdate(e.target.value)}
						/>
					</Label>
					<Label>
						{" "}
						Actif
						<select
							value={ActiftoUpdate}
							onChange={(e) => setActiftoUpdate(e.target.value)}>
							<option value="Oui">Oui</option>
							<option value="Non">Non</option>
						</select>
					</Label>
					<Label>
						{" "}
						Competence
						<select
							value={CompetencetoUpdate}
							onChange={(e) => setCompetencetoUpdate(e.target.value)}>
							<option value="Competence1">Competence 1</option>
							<option value="Competence2">Competence 2</option>
						</select>
					</Label>
					<Label>
						{" "}
						Statistique
						<select
							value={StattoUpdate}
							onChange={(e) => setStattoUpdate(e.target.value)}>
							<option value="Stat1">Statistique 1</option>
							<option value="Stat2">Statistique 2</option>
						</select>
					</Label>

					<Button
						color="primary"
						type="button"
						onClick={() => {
							UpdateJoueur(
								Number(id),
								NomtoUpdate,
								PrenomtoUpdate,
								ActiftoUpdate,
								CompetencetoUpdate,
								StattoUpdate
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
