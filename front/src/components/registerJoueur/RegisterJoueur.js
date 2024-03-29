/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState /*, useEffect */ } from "react";
import "./registerJoueur.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { register } from "../../services/loginRegisterJoueur.service";

export default function RegisterJoueur(props) {
	const initialValues = {
		email: props.player.email,
		password: "",
		nom: props.player.nom,
		prenom: props.player.prenom,
		dateNaissance: "",
		telephone: props.player.tel,
		droit: "",
		poids: "",
		taille: "",
		IMC: "",
	};
	const [formValues, setFormValues] = useState(initialValues);
	console.log(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setTimeout(async () => {
			await register(formValues).then(
				(res) => {
					setFormErrors(res);
					// window.location.reload("/login-joueur");
				},
				(e) => {
					const resMessage =
						(e.response && e.response.data && e.response.data.msg) ||
						e.message ||
						e.toString();
					setFormErrors(resMessage);
				}
			);
		}, 300);
		setIsSubmit(true);
	};
	// useEffect(() => {
	// 	console.log(formErrors);
	// 	if (Object.keys(formErrors).length === 0 && isSubmit) {
	// 		console.log(formValues);
	// 	}
	// }, [formErrors]);
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
			{Object.keys(formErrors).length === 0 && isSubmit && (
				<div className="ui message success">Sign up successfully</div>
			)}
			<Form className="form" onSubmit={handleSubmit}>
				<FormGroup>
					<p>{formErrors.nom}</p>

					<Label> Nom </Label>
					<Input
						type="text"
						name="nom"
						value={formValues.nom}
						onChange={handleChange}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Prénom </Label>
					<Input
						type="text"
						name="prenom"
						value={formValues.prenom}
						onChange={handleChange}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Date De Naissance </Label>
					<Input
						type="Date"
						name="dateNaissance"
						value={formValues.dateNaissance}
						onChange={handleChange}></Input>
				</FormGroup>
				<FormGroup>
					<p>{formErrors.email}</p>

					<Label> Email </Label>
					<Input
						type="email"
						name="email"
						value={formValues.email}
						onChange={handleChange}></Input>
				</FormGroup>
				<FormGroup>
					<p>{formErrors.password}</p>

					<Label> Password </Label>
					<Input
						type="password"
						name="password"
						value={formValues.password}
						onChange={handleChange}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Tel </Label>
					<Input
						type="telephone"
						name="telehone"
						value={formValues.telephone}
						onChange={handleChange}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Poids </Label>
					<Input
						type="number"
						name="poids"
						value={formValues.poids}
						onChange={handleChange}></Input>
				</FormGroup>
				<FormGroup>
					<Label> IMC </Label>
					<Input
						type="number"
						name="IMC"
						value={formValues.IMC}
						onChange={handleChange}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Droitier/Gaucher </Label>
					<Input
						type="boolean"
						name="droitier"
						value={formValues.droit}
						onChange={handleChange}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Taille </Label>
					<Input
						type="text"
						name="taille"
						value={formValues.taille}
						onChange={handleChange}></Input>
				</FormGroup>

				<Button type="submit">S'inscrire</Button>
			</Form>
		</>
	);
}
