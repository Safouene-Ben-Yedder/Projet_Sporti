import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import emailjs from "emailjs-com";
//import { Link } from "react-router-dom";
import "./seanceform.css";
export default function SeanceForm(props) {
	const addTask = "Add";
	const [titre, setTitre] = useState("");
	const [joueur, setJoueur] = useState("");
	const [horaire, setHoraire] = useState("");
	const [date, setDate] = useState("");
	const [lieu, setLieu] = useState("");
	const [competence, setCompetence] = useState("");
	const [objectif, setObjectif] = useState("");
	const [statistique, setStatistique] = useState("");
	const [progseance, setProgseance] = useState("");

	const [email, setEmail] = useState("");

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
			joueur,
			horaire,
			date,
			lieu,
			competence,
			objectif,
			statistique,
			progseance
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
					<Label> Joueur </Label>
					<Input
						type="text"
						name="programme"
						id=""
						value={joueur}
						onChange={(e) => setJoueur(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> horaire </Label>
					<Input
						type="time"
						name="horaire"
						id=""
						value={horaire}
						onChange={(e) => setHoraire(e.target.value)}></Input>
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
						onChange={(e) => setLieu(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> competence </Label>

					<select onChange={(e) => setCompetence(e.target.value)}>
						<option>{competence} </option>
						<option value="30 secondes">30 secondes </option>
						<option value="40 secondes">40 secondes </option>
						<option value="60 secondes">60 secondes </option>
					</select>
				</FormGroup>
				<FormGroup>
					<Label> statistique </Label>

					<select onChange={(e) => setStatistique(e.target.value)}>
						<option>{statistique} </option>
						<option value="respiration">respiration </option>
						<option value="200 mètres">200 mètres</option>
						<option value="100 mètres">100 mètres</option>
					</select>
				</FormGroup>
				<FormGroup>
					<Label> Programme Seance </Label>

					<select onChange={(e) => setProgseance(e.target.value)}>
						<option>{progseance} </option>
						<option value="Programme 1">Programme 1 </option>
						<option value="Programme 2">Programme 2</option>
						<option value="Programme 3">Programme 3</option>
					</select>
				</FormGroup>
				<FormGroup>
					<Label> Email </Label>
					<Input
						type="email"
						name="email"
						id=""
						value={email}
						required="true"
						onChange={(e) => setEmail(e.target.value)}></Input>
				</FormGroup>
				<Button color="success" type="submit" onClick={handleAddSeance}>
					{addTask}
				</Button>
			</Form>
		</>
	);
}
