import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import Example from "./Example";

//import { Link } from "react-router-dom";
import "./programmeseanceform.css";
export default function ProgrammeSeanceForm(props) {
	const addTask = "Add";
	const [titre, setTitre] = useState("");
	const [description, setDescription] = useState("");
	const [technique, setTechnique] = useState("");
	const [image, setImage] = useState("");
	const [lienVideo, setLienVideo] = useState("");

	function handleAddProgSeance() {
		props.addProgSeance(titre, description, technique, image, lienVideo);
	}
	// const nomFile = (e) => {
	// 	console.log("upload:", e);
	// 	if (Array.isArray(e)) {
	// 		return e;
	// 	}
	// 	return e && e.fileList;
	// };
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
					<Label> Technique </Label>
					<Input
						type="text"
						name="technique"
						id=""
						value={technique}
						onChange={(e) => setTechnique(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label for="nomFile">File</Label>
					<Input
						id="nomFile"
						name="nomFile"
						type="file"
						onChange={(e) => setImage(e.target.value)}
					/>
				</FormGroup>

				<FormGroup>
					<Label> lien vidéo </Label>
					<Input
						type="text"
						name="lienVideo"
						id=""
						value={lienVideo}
						onChange={(e) => setLienVideo(e.target.value)}></Input>
				</FormGroup>
				<Button color="success" type="button" onClick={handleAddProgSeance}>
					{addTask}
				</Button>
			</Form>
		</>
	);
}
