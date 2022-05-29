import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import { Link } from "react-router-dom";
import "./defiform.css";
export default function DefiForm(props) {
	const addTask = "Add";
	const [nom, setNom] = useState("");
	const [description, setDescription] = useState("");
	const [objectif, setObjectif] = useState("");
	const [lienVideo, setLienVideo] = useState("");

	function handleAddDefi() {
		props.addDefi(nom, description, objectif, lienVideo);
	}
	return (
		<>
			<Form className="ajout">
				<FormGroup>
					<Label> nom </Label>
					<Input
						type="text"
						name="programme"
						id="nomDefi"
						value={nom}
						onChange={(e) => setNom(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> description </Label>
					<Input
						type="text"
						name="description"
						id="descDefi"
						value={description}
						onChange={(e) => setDescription(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> objectif </Label>
					<Input
						type="text"
						name="objectif"
						id="objDefi"
						value={objectif}
						onChange={(e) => setObjectif(e.target.value)}></Input>
				</FormGroup>

				<FormGroup>
					<Label> lien vidéo </Label>
					<Input
						type="text"
						name="lienVideo"
						id="lienDefi"
						value={lienVideo}
						onChange={(e) => setLienVideo(e.target.value)}></Input>
				</FormGroup>
				<Button color="success" type="button" onClick={handleAddDefi}>
					{addTask}
				</Button>
			</Form>
		</>
	);
}
