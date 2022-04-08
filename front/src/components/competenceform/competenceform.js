import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import { Link } from "react-router-dom";

export default function CompetenceForm(props) {
	const addComp = "Add";
	const [nom, setNom] = useState("");
	const [description, setDescription] = useState("");
	const [visvible, setVisible] = useState("");
	const [lienVideo, setLienVideo] = useState("");
	const [rating, setRating] = useState("");

	function handleAddComp() {
		props.addComp(nom, description, visvible, lienVideo, rating);
	}
	return (
		<>
			<Form className="ajoutcomp">
				<FormGroup>
					<Label> Nom de la Compétence </Label>
					<Input
						type="text"
						name="nom"
						id=""
						required
						value={nom}
						onChange={(e) => setNom(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Description </Label>
					<Input
						type="textarea"
						name="description"
						required
						id=""
						value={description}
						onChange={(e) => setDescription(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Lien vidéo </Label>
					<Input
						type="text"
						name="lienVideo"
						required
						id=""
						value={lienVideo}
						onChange={(e) => setLienVideo(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Visible </Label>
					<Input
						type="checkbox"
						name="visible"
						required
						id=""
						value={visvible}
						onChange={(e) => setVisible(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Rating </Label>
					<ReactStars
						count={5}
						name="rating"
						required
						rating={rating}
						onChange={(e) => setRating(e.rating)}></ReactStars>
				</FormGroup>
				<Button color="success" type="button" onClick={handleAddComp}>
					{addComp}
				</Button>
			</Form>
		</>
	);
}
