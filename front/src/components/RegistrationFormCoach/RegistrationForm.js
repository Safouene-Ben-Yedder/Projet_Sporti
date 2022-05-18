import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
//import { register } from "../../services/login.service";
import Axios from "axios";

//import AuthService from "../../services/login.service";
//import register from "../../services/login.service";
export default function RegistrationForm() {
	const [nom, setNom] = useState("");
	const [prenom, setPrenom] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [dateNaissance, setDateNaissance] = useState("");
	const [error, setError] = useState(false);
	console.log(error);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		try {
			console.log("cvb");
			const res = await Axios.post("localhost:5000/api/coach/register/", {
				nom,
				prenom,
				email,
				password,
				dateNaissance,
			});
			res.data && window.location.replace("/loginD");
		} catch (err) {
			setError(true);
		}
	};
	// const validate = (values) => {
	// 	const errors = {};
	// 	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
	// 	if (!values.nom) {
	// 		errors.nom = "nom is required!";
	// 	}
	// 	if (!values.email) {
	// 		errors.email = "Email is required!";
	// 	} else if (!regex.test(values.email)) {
	// 		errors.email = "This is not a valid email format!";
	// 	}
	// 	if (!values.password) {
	// 		errors.password = "Password is required";
	// 	} else if (values.password.length < 4) {
	// 		errors.password = "Password must be more than 4 characters";
	// 	} else if (values.password.length > 10) {
	// 		errors.password = "Password cannot exceed more than 10 characters";
	// 	}
	// 	return errors;
	// };
	return (
		<>
			<Form className="form" onSubmit={handleSubmit}>
				<FormGroup>
					<Label> Nom </Label>
					<Input
						type="text"
						name="nom"
						value={nom}
						onChange={(e) => setNom(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Prénom </Label>
					<Input
						type="text"
						name="prenom"
						value={prenom}
						onChange={(e) => setPrenom(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Date De Naissance </Label>
					<Input
						type="Date"
						name="dateNaissance"
						value={dateNaissance}
						onChange={(e) => setDateNaissance(e.target.value)}></Input>
				</FormGroup>

				<FormGroup>
					<Label> Email </Label>
					<Input
						type="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Password </Label>
					<Input
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}></Input>
				</FormGroup>

				<button className="registerLoginButton">
					<Link className="link" to="/loginD">
						Login
					</Link>
				</button>
			</Form>
		</>
	);
}
