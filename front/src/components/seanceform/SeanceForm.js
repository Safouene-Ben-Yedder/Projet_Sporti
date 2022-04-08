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
	const [image, setImage] = useState("");
	const [competence, setCompetence] = useState("");
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
		props.addSeance(titre, description, date, image, competence, email);
		console.log("Added");
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
						type="text"
						name="date"
						id=""
						value={date}
						onChange={(e) => setDate(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Image </Label>
					<Input
						type="text"
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
