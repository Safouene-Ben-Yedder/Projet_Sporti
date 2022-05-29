import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import emailjs from "emailjs-com";
//import { Link } from "react-router-dom";
import "./seanceform.css";
export default function SeanceForm(props) {
	const addTask = "Add";
	const [titre, setTitre] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");
	const [joueur, setJoueur] = useState("");
	const [objectif, setObjectif] = useState("");
	const [lieu, setLieu] = useState("");
	const [progseance, setProgseance] = useState("");
	const [competence, setCompetence] = useState("");
	const [statistique, setStatistique] = useState("");
	// const [horaire, setHoraire] = useState("");

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_0n1a7hv",
				"template_x4407bm",
				e.target,
				"nvbUGLWsa-Kfo8HT4"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	function handleAddSeance() {
		props.addSeance(
			titre,
			description,
			date,
			joueur,
			objectif,
			lieu,
			progseance,
			competence,
			statistique
		);
	}
	return (
		<>
			<Form className="ajout" onSubmit={sendEmail}>
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
					<Label> Description </Label>
					<Input
						type="text"
						name="programme"
						id=""
						value={description}
						onChange={() => setDescription("dd")}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Joueur </Label>
					<Input
						type="text"
						name="programme"
						id=""
						value={joueur}
						onChange={() => setJoueur("6286d2719814ad2c3b5a3e58")}></Input>
				</FormGroup>

				<FormGroup>
					<Label> date </Label>
					<Input
						type="date"
						name="date"
						id=""
						value={date}
						onChange={() => setDate("2004-03-01")}></Input>
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
					<Label> lieu </Label>
					<Input
						type="text"
						name="lieu"
						id=""
						value={lieu}
						onChange={() => setLieu("6286d2719814ad2c3b5a3e58")}></Input>
				</FormGroup>
				<FormGroup>
					<Label> competence </Label>

					<select onChange={() => setCompetence("62865184c4b6faffc61c7634")}>
						<option>{competence} </option>
						<option value="30 secondes">30 secondes </option>
						<option value="40 secondes">40 secondes </option>
						<option value="60 secondes">60 secondes </option>
					</select>
				</FormGroup>
				<FormGroup>
					<Label> statistique </Label>

					<select onChange={() => setStatistique("6288243e437599ed76d62504")}>
						<option>{statistique} </option>
						<option value="respiration">respiration </option>
						<option value="200 mètres">200 mètres</option>
						<option value="100 mètres">100 mètres</option>
					</select>
				</FormGroup>
				<FormGroup>
					<Label> Programme Seance </Label>

					<select onChange={() => setProgseance("6286ec836b3d82008a3d8273")}>
						<option>{progseance} </option>
						<option value="Programme 1">Programme 1 </option>
						<option value="Programme 2">Programme 2</option>
						<option value="Programme 3">Programme 3</option>
					</select>
				</FormGroup>

				<Button color="success" type="submit" onClick={handleAddSeance}>
					{addTask}
				</Button>
			</Form>
		</>
	);
}
