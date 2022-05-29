import { useState, useEffect } from "react";
import { Form, FormGroup, Label, Button } from "reactstrap";
import { Input } from "reactstrap";
import "./defi.css";
import { listPlayers } from "../../services/login.service";
export default function Defi({
	nom,
	description,
	objectif,
	UpdateDefi,
	lienVideo,
	id,
	deleteDefi,
	assigner,
	// assignerDefis
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [doneMode, setDoneMode] = useState(false);
	const [NomtoUpdate, setNomtoUpdate] = useState(nom);
	const [descriptiontoUpdate, setDescriptiontoUpdate] = useState(description);
	const [objectiftoUpdate, setObjectiftoUpdate] = useState(objectif);
	const [lienVideotoUpdate, setLienVideotoUpdate] = useState(lienVideo);

	const [periode, setPeriode] = useState("");
	const [isVisible, setIsVisible] = useState(false);
	const [selectedJoueurs, setSelectedJoueurs] = useState("");
	const [joueurs, setJoueurs] = useState([]);

	useEffect(() => {
			const listPlayer = async () => {
			try {
				const res = await listPlayers();
				setJoueurs(res)
				setSelectedJoueurs(res[0]._id)
				console.log(res);
			} catch (e) {
				console.log('hh',e)
			}
		};
		listPlayer();
	}, []);

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
								<Button color="success" onClick={() => setIsVisible(!isVisible)}>
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
								<Button color="success" onClick={() => setIsVisible(!isVisible)}>
									Assigner défi
								</Button>
								<Input value="DONE" valid disabled />
							</div>
						</div>
					)}
					{isVisible && (
					<>
						<Form>
						<FormGroup>
							<Label>
								Période
								<input
									type="date"
									name="periode"
									value={periode}
									onChange={(e) => setPeriode(e.target.value)}
								/>
							</Label>
							<Label>
								Séléctionner un joueur
							</Label>

							<select
								value={selectedJoueurs}
								onChange={(e) => setSelectedJoueurs(e.target.value)}>
									{
										joueurs.map(dis => <option label={dis.nom} value={dis._id}>{dis.nom}</option>)
									}
								
							</select>
							<Button
								color="success"
								type="button"
								onClick={() => {
									assigner(
										id,
										periode,
										selectedJoueurs
									
									);
									setIsVisible(false);}}>
								Assigner
							</Button>
						</FormGroup>
						</Form>
					</>
					)		
			}
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
