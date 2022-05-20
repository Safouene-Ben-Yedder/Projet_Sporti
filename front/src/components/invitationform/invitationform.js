import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function InvitationForm(props) {
	const Inviter = "Send Invitation";
	const [nom, setNom] = useState("");
	const [prenom, setPrenom] = useState("");
	const [email, setEmail] = useState("");
	const [tel, setTel] = useState("");

	// function sendEmail(e) {
	// 	e.preventDefault();

	// 	emailjs
	// 		.sendForm(
	// 			"service_0n1a7hv",
	// 			"template_x4407bm",
	// 			e.target,
	// 			"nvbUGLWsa-Kfo8HT4"
	// 		)
	// 		.then(
	// 			(result) => {
	// 				console.log(result.text);
	// 			},
	// 			(error) => {
	// 				console.log(error.text);
	// 			}
	// 		);
	// 	e.target.reset();
	// }

	function handleInvitation() {
		props.Inviter(nom, prenom, email, tel);
		toast.success("Player Invited");
	}
	return (
		<>
			<Form>
				<FormGroup>
					<Label> Nom </Label>
					<Input
						type="text"
						name="nom"
						required
						value={nom}
						onChange={(e) => setNom(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Prénom </Label>
					<Input
						type="text"
						name="prenom"
						required
						value={prenom}
						onChange={(e) => setPrenom(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Email </Label>
					<Input
						type="email"
						name="email"
						value={email}
						required
						onChange={(e) => setEmail(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Téléphone </Label>
					<Input
						type="tel"
						name="tel"
						value={tel}
						required="true"
						onChange={(e) => setTel(e.target.value)}></Input>
				</FormGroup>
				<Button color="success" type="button" onClick={handleInvitation}>
					{Inviter}
				</Button>
				<ToastContainer />
			</Form>
		</>
	);
}
