import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
export default function InvitationForm(props) {
	const Inviter = "Send Invitation";
	const [nom, setNom] = useState("");
	const [prenom, setPrenom] = useState("");
	const [dateNaissance, setdateNaissance] = useState("");
	const [email, setEmail] = useState("");
	const [poids, setPoids] = useState("");
	const [taille, setTaille] = useState("");
	const [IMC, setIMC] = useState("");
	const [droit, setDroit] = useState("");

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

	function handleInvitation() {
		props.Inviter(nom, prenom, dateNaissance, email, poids, taille, IMC, droit);
		console.log("Invited");
	}
	return (
		<>
			<Form onSubmit={sendEmail}>
				<FormGroup>
					<Label> Nom </Label>
					<Input
						type="text"
						name="nom"
						required="true"
						value={nom}
						onChange={(e) => setNom(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Prénom </Label>
					<Input
						type="text"
						name="prenom"
						required="true"
						value={prenom}
						onChange={(e) => setPrenom(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Date De Naissance </Label>
					<Input
						type="Date"
						name="dateNaissance"
						required="true"
						value={dateNaissance}
						onChange={(e) => setdateNaissance(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Email </Label>
					<Input
						type="email"
						name="email"
						value={email}
						required="true"
						onChange={(e) => setEmail(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Poids </Label>
					<Input
						type="number"
						name="poids"
						value={poids}
						onChange={(e) => setPoids(e.target.value)}>
						Kg
					</Input>
				</FormGroup>
				<FormGroup>
					<Label> Taille </Label>
					<Input
						type="number"
						name="Taille"
						value={taille}
						onChange={(e) => setTaille(e.target.value)}>
						Cm
					</Input>
				</FormGroup>
				<FormGroup>
					<Label> IMC </Label>
					<Input
						type="number"
						name="IMC"
						value={IMC}
						onChange={(e) => setIMC(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Droitier/Gaucher </Label>
					<select onChange={(e) => setDroit(e.target.value)}>
						<option value="Droitier">Droitier</option>
						<option value="Gaucher">Gaucher</option>
					</select>
				</FormGroup>
				<Button color="success" type="submit" onClick={handleInvitation}>
					{Inviter}
				</Button>
			</Form>
		</>
	);
}
