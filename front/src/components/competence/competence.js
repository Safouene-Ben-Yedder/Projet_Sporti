import { useState } from "react";
import { Button, Label } from "reactstrap";
import { FaStar } from "react-icons/fa";
import "./comp.css";

export default function Competence({
	id,
	nom,
	description,
	lien,
	visible,
	rating,
	UpdateCompetence,
	deleteCompetence,
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [nomtoUpdate, setnomtoUpdate] = useState(nom);
	const [descriptiontoUpdate, setDescriptiontoUpdate] = useState(description);
	const [visibletoUpdate, setvisvibletoUpdate] = useState(visible);
	const [lientoUpdate, setlientoUpdate] = useState(lien);
	const [ratingtoUpdate, setRatingtoUpdate] = useState(rating);
	return (
		<div className="competence">
			{!updateMode ? (
				<>
					<div className="nom">Nom : {nom}</div>
					<div className="description">Description : {description} </div>
					<div className="lien">Lien : {lien}</div>
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
							name="lien"
							value={lientoUpdate}
							onChange={(e) => setlientoUpdate(e.target.value)}
						/>
					</Label>
					<Label>
						{" "}
						Visible
						<select
							value={visibletoUpdate}
							onChange={(e) => setvisvibletoUpdate(e.target.value)}>
							<option value="oui">Oui</option>
							<option value="non">Non</option>
						</select>{" "}
					</Label>
					<div>
						Rating
						{[...Array(5)].map((star, i) => {
							const ratingValue = i + 1;
							return (
								<label>
									<input
										type="radio"
										name="radio"
										class="radio"
										value={ratingValue}
										onClick={() => setRatingtoUpdate(ratingValue)}
									/>
									<FaStar
										className="star"
										color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
										size={20}
									/>
								</label>
							);
						})}
					</div>
					<Button
						color="primary"
						type="button"
						onClick={() => {
							UpdateCompetence(
								id,
								nomtoUpdate,
								descriptiontoUpdate,
								lientoUpdate,
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
