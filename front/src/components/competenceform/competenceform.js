import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
// import insertCss from "insert-css";
//import { Link } from "react-router-dom";
// import { StarRatingInput, css } from "react-star-rating-input";
import { FaStar } from "react-icons/fa";
import "./form.css";
export default function CompetenceForm(props) {
	// insertCss(css);
	const addComp = "Add";
	const [nom, setNom] = useState("");
	const [description, setDescription] = useState("");
	const [visible, setVisible] = useState("");
	const [lien, setlien] = useState("");
	const [rating, setRating] = useState(null);
	function handleAddComp() {
		props.addComp(nom, description, lien, visible, rating);
	}
	return (
		<>
			<Form className="ajoutcomp">
				<FormGroup>
					<Label> Nom de la Compétence </Label>
					<Input
						type="text"
						name="nom"
						id="nomCompetence"
						required
						value={nom}
						onChange={(e) => setNom(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Description </Label>
					<Input
						type="textarea"
						name="description"
						id="descCompetence"
						required
						value={description}
						onChange={(e) => setDescription(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Lien vidéo </Label>
					<Input
						type="text"
						name="lien"
						id="lienCompetence"
						required
						value={lien}
						onChange={(e) => setlien(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Visible </Label>
					<select
						required
						value={visible}
						onChange={(e) => setVisible(e.target.value)}>
						<option></option>
						<option value="oui">Oui</option>
						<option value="non">Non</option>
					</select>
				</FormGroup>
				<FormGroup>
					<div>
						{[...Array(5)].map((star, i) => {
							const ratingValue = i + 1;
							return (
								<label>
									<input
										type="radio"
										name="radio"
										class="radio"
										value={ratingValue}
										onClick={() => setRating(ratingValue)}
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

					{/* <Label> Rating </Label>
					<StarRatingInput
						size={5}
						name="rating"
						required
						value={rating}
						onChange={(e) => setRating(e.rating)}></StarRatingInput> */}
				</FormGroup>
				<Button color="success" type="button" onClick={handleAddComp}>
					{addComp}
				</Button>
			</Form>
		</>
	);
}
