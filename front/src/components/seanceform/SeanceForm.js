import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import { Link } from "react-router-dom";
import "./seanceform.css";
export default function SeanceForm(props) {
	const addTask = "Add";
	const [titre, setTitre] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");
	const [image, setImage] = useState("");
	const [competence, setCompetence] = useState("");

	function handleAddSeance() {
		props.addSeance(titre, description, date, image, competence);
	}
	return (
		<>
			<Form className="ajout">
				<FormGroup>
					<Label> Titre </Label>
					<Input
						type="text"
						name="programme"
						id=""
						value={titre}
						onChange={(e) => setTitre(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> description </Label>
					<Input
						type="text"
						name="description"
						id=""
						value={description}
						onChange={(e) => setDescription(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> date </Label>
					<Input
						type="date"
						name="date"
						id=""
						value={date}
						onChange={(e) => setDate(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Image </Label>
					<Input
						type="file"
						name="image"
						id=""
						value={image}
						onChange={(e) => setImage(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> competence </Label>
					<Input
						type="text"
						name="competence"
						id=""
						value={competence}
						onChange={(e) => setCompetence(e.target.value)}></Input>
				</FormGroup>
				<Button color="success" type="button" onClick={handleAddSeance}>
					{addTask}
				</Button>
			</Form>
		</>
	);
}
