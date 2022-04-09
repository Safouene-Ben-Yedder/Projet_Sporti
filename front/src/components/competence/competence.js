import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Button, Label } from "reactstrap";

export default function Competence({
	nom,
	description,
	visible,
	UpdateCompetence,
	lienVideo,
	id,
	deleteCompetence,
	rating,
	props,
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [nomtoUpdate, setnomtoUpdate] = useState(nom);
	const [descriptiontoUpdate, setDescriptiontoUpdate] = useState(description);
	const [visibletoUpdate, setvisvibletoUpdate] = useState(visible);
	const [lienVideotoUpdate, setLienVideotoUpdate] = useState(lienVideo);
	const [ratingtoUpdate, setRatingtoUpdate] = useState(rating);
	return (
		<div className="competence">
			{!updateMode ? (
				<>
					<div className="nom">Nom : {nom}</div>
					<div className="description">Description : {description} </div>
					<div className="lienVideo">Lien : {lienVideo}</div>
					<div className="visible">Visible : {visible}</div>
					<div className="rating">Rating : {rating}</div>

					<div className="actions">
						<Button color="primary" onClick={() => setUpdateMode(true)}>
							Modifier
						</Button>
						<Button color="danger" onClick={() => deleteCompetence(id)}>
							Supprimer
						</Button>
					</div>
				</>
			) : (
				<div>
					<Label>
						Nom
						<input
							type="text"
							name="nom"
							value={nom}
							onChange={(e) => setnomtoUpdate(e.target.value)}
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
						Visible
						<input
							type="checkbox"
							name="Visible"
							value={visibletoUpdate}
							onChange={(e) => setvisvibletoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						Rating
						<ReactStars
							count={5}
							name="rating"
							value={ratingtoUpdate}
							onChange={(e) => setRatingtoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Button
						color="primary"
						type="button"
						onClick={() => {
							UpdateCompetence(
								Number(id),
								nomtoUpdate,
								descriptiontoUpdate,
								lienVideotoUpdate,
								visibletoUpdate,
								ratingtoUpdate
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
