import { useState } from "react";
import { Button, Label } from "reactstrap";

export default function Stat({
	key,
	Titre,
	description,
	Visible,
	UpdateStat,
	lienVideo,
	id,
	timer,
	deleteStat,
	maxmin,
	props,
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [TitretoUpdate, setTitretoUpdate] = useState(Titre);
	const [descriptiontoUpdate, setDescriptiontoUpdate] = useState(description);
	const [VisibletoUpdate, setVisvibletoUpdate] = useState(Visible);
	const [lienVideotoUpdate, setLienVideotoUpdate] = useState(lienVideo);
	const [timertoUpdate, setTimertoUpdate] = useState(timer);
	const [maxmintoUpdate, setmaxmintoUpdate] = useState(maxmin);

	return (
		<div className="Stat">
			{!updateMode ? (
				<>
					<div className="Titre">Titre : {Titre}</div>
					<div className="description">Description : {description} </div>
					<div className="lienVideo">Lien : {lienVideo}</div>
					<div className="Visible">Visible : {Visible}</div>
					<div className="timer">Timer: {timer}</div>
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
						lien vidéo
						<input
							type="text"
							name="lienvideo"
							value={lienVideotoUpdate}
							onChange={(e) => setLienVideotoUpdate(e.target.value)}
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
						Visible
						<input
							type="checkbox"
							name="Visible"
							value={VisibletoUpdate}
							onChange={(e) => setVisvibletoUpdate(e.target.value)}
						/>{" "}
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
								Number(id),
								TitretoUpdate,
								descriptiontoUpdate,
								lienVideotoUpdate,
								VisibletoUpdate,
								timertoUpdate,
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
