import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
export default function PasswordForm(props) {
	const addpass = "Send Invitation";
	const [pass, setPass] = useState("");

	function handlePass() {
		props.addpass(pass);
	}
	return (
		<>
			<h1>Ajouter Un Mot De Passe </h1>
			<Form>
				<FormGroup>
					<Label>Mot de passe</Label>
					<Input
						type="password"
						id="password"
						placeholder="Password"
						onChange={(e) => setPass(e.target.value)}
					/>
				</FormGroup>
				<Button type="submit" onClick={handlePass}>
					Ajouter
				</Button>
			</Form>
		</>
	);
}
