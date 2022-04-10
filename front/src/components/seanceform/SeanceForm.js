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

	const [objectif, setObjectif] = useState("");
	const [periode, setPeriode] = useState("");
	const [reccurente, setReccurente] = useState("");
	const [lieu, setLieu] = useState("");
	const [aatteindre, setAatteindre] = useState("");
	const [horraire, setHorraire] = useState("");

	function handleAddSeance() {
		props.addSeance(
			titre,
			description,
			date,
			competence,
			objectif,
			periode,
			reccurente,
			lieu,
			aatteindre,
			horraire
		);
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
					<Label> Date </Label>
					<Input
						type="date"
						name="date"
						id=""
						value={date}
						onChange={(e) => setDate(e.target.value)}></Input>
				</FormGroup>

				<FormGroup>
					<Label> Competence </Label>
					<Input
						type="text"
						name="competence"
						id=""
						value={competence}
						onChange={(e) => setCompetence(e.target.value)}></Input>
				</FormGroup>

				<FormGroup>
					<Label> Objectif </Label>
					<Input
						type="text"
						name="objectif"
						id=""
						value={objectif}
						onChange={(e) => setObjectif(e.target.value)}></Input>
				</FormGroup>

				<FormGroup>
					<Label> Goal a atteindre </Label>
					<Input
						type="text"
						name="aatteindre"
						id=""
						value={aatteindre}
						onChange={(e) => setAatteindre(e.target.value)}></Input>
				</FormGroup>

				<FormGroup>
					<Label> Lieu </Label>
					<Input
						type="text"
						name="lieu"
						id=""
						value={lieu}
						onChange={(e) => setLieu(e.target.value)}></Input>
				</FormGroup>

				<FormGroup>
					<Label> Periode </Label>
					<Input
						type="range"
						name="periode"
						id=""
						value={periode}
						onChange={(e) => setPeriode(e.target.value)}></Input>
				</FormGroup>

				<FormGroup>
					<Label> Horraire </Label>
					<Input
						type="time"
						name="horraire"
						id=""
						value={horraire}
						onChange={(e) => setHorraire(e.target.value)}></Input>
				</FormGroup>

				<FormGroup>
					<Label> Reccurence </Label>
					<Input
						type="checkbox"
						name="reccurente"
						id=""
						value={reccurente}
						onChange={(e) => setReccurente(e.target.value)}></Input>
				</FormGroup>

				<Button color="success" type="button" onClick={handleAddSeance}>
					{addTask}
				</Button>
			</Form>
		</>
	);
}
