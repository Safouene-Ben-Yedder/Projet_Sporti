import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import { Link } from "react-router-dom";
import "./Lieuform.css";
export default function LieuForm(props) {
	const addLieu = "Add";
	const [nom, setNom] = useState("");
	const [ville, setVille] = useState("");
	const [pays, setPays] = useState("");
	const [adresse, setAdresse] = useState("");
	
	function handleAddLieu() {
		props.addLieu(nom, ville, pays, adresse);
	}
	return (
		<>
			<Form className="form">
				<FormGroup>
					<Label> Nom </Label>
					<Input
						type="text"
						name="nom"
						id=""
						value={nom}
						onChange={(e) => setNom(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Ville </Label>
					<Input
						type="text"
						name="ville"
						id=""
						value={ville}
						onChange={(e) => setVille(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Pays </Label>
					<Input
						type="text"
						name="pays"
						id=""
						value={pays}
						onChange={(e) => setPays(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Adresse </Label>
					<Input
						type="text"
						name="adresse"
						id=""
						value={adresse}
						onChange={(e) => setAdresse(e.target.value)}></Input>
				</FormGroup>
				<Button color="success" type="button" onClick={handleAddLieu}>
					{addLieu}
				</Button>
			</Form>
		</>
	);
}
