import { useState } from "react";
import { Button, Label } from "reactstrap";

export default function Stat({
	id,
	Titre,
	description,
	timer,
	lien,
	Visible,
	maxmin,
	UpdateStat,
	deleteStat,
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [TitretoUpdate, setTitretoUpdate] = useState(Titre);
	const [descriptiontoUpdate, setDescriptiontoUpdate] = useState(description);
	const [timertoUpdate, setTimertoUpdate] = useState(timer);
	const [lientoUpdate, setlientoUpdate] = useState(lien);
	const [VisibletoUpdate, setVisvibletoUpdate] = useState(Visible);
	const [maxmintoUpdate, setmaxmintoUpdate] = useState(maxmin);

	return (
		<div className="Stat">
			{!updateMode ? (
				<>
					<div className="Titre">Titre : {Titre}</div>
					<div className="description">Description : {description} </div>
					<div className="timer">Timer: {timer}</div>
					<div className="lien">Lien : {lien}</div>
					<div className="Visible">Visible : {Visible}</div>
					<div className="maxmin">Maximiser/Minimiser: {maxmin}</div>

					<div className="actions">
						<Button color="primary" onClick={() => setUpdateMode(true)}>
							Modifier
						</Button>
						<Button color="danger" onClick={() => deleteStat(id)}>
							Supprimer
						</Button>
					</div>
				</>
			) : (
				<div>
					<Label>
						Titre
						<input
							type="text"
							name="Titre"
							value={Titre}
							onChange={(e) => setTitretoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						description
						<input
							type="text"
							name="description"
							value={descriptiontoUpdate}
							onChange={(e) => setDescriptiontoUpdate(e.target.value)}
						/>
					</Label>
					<Label>
						{" "}
						timer
						<input
							type="number"
							name="timer"
							value={timertoUpdate}
							onChange={(e) => setTimertoUpdate(e.target.value)}
						/>
					</Label>
					<Label>
						{" "}
						lien vidéo
						<input
							type="text"
							name="lien"
							value={lientoUpdate}
							onChange={(e) => setlientoUpdate(e.target.value)}
						/>
					</Label>

					<Label>
						{" "}
						Visible
						<select
							value={VisibletoUpdate}
							onChange={(e) => setVisvibletoUpdate(e.target.value)}>
							<option value="Oui">Oui</option>
							<option value="Non">Non</option>
						</select>
					</Label>
					<Label>
						{" "}
						Maximiser/Minimiser
						<select
							value={maxmintoUpdate}
							onChange={(e) => setmaxmintoUpdate(e.target.value)}>
							<option value="Maximiser">Maximiser</option>
							<option value="Minimiser">Minimiser</option>
						</select>
					</Label>
					<Button
						color="primary"
						type="button"
						onClick={() => {
							UpdateStat(
								id,
								TitretoUpdate,
								descriptiontoUpdate,
								timertoUpdate,
								lientoUpdate,
								VisibletoUpdate,
								maxmintoUpdate
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
