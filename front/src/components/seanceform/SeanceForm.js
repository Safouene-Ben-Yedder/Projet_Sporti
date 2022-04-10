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
					<Input
						type="text"
						name="competence"
						id=""
						value={competence}
						onChange={(e) => setCompetence(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> statistique </Label>
					<Input
						type="text"
						name="statisqtique"
						id=""
						value={statistique}
						onChange={(e) => setStatistique(e.target.value)}></Input>
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
