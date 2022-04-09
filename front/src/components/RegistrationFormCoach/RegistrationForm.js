import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function RegistrationForm(props){
    const initialValues = {
		nom: "",
		prenom: "",
		dateNaissance: "",
		email: "",
		password: "",
	};
    const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
		console.log(formValues);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};
	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
		}
	}, [formErrors]);
	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.nom) {
			errors.nom = "nom is required!";
		}
		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!regex.test(values.email)) {
			errors.email = "This is not a valid email format!";
		}
		if (!values.password) {
			errors.password = "Password is required";
		} else if (values.password.length < 4) {
			errors.password = "Password must be more than 4 characters";
		} else if (values.password.length > 10) {
			errors.password = "Password cannot exceed more than 10 characters";
		}
		return errors;
	};
    return(
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

				<Button type="submit">S'inscrire</Button>
			</Form>
        </>
    );
}