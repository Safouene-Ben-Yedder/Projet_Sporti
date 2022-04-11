import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "./paiement.css";
export const PaiementForm = () => {
	const [abonnement, setAbonnement] = useState();
	const [isSubmit, setIsSubmit] = useState(false);

	const handleCheckbox = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setAbonnement(value);
		console.log(name, value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmit(true);
	};

	return (
		<>
			<h2 className="titreAbonnement"> Choisir votre abonnement</h2>

			{isSubmit && (
				<div className="ui message success">Sign up successfully</div>
			)}
			<Form className="ajout" onSubmit={handleSubmit}>
				<FormGroup>
					<Input
						type="radio"
						name="abonnement"
						value="free"
						onChange={handleCheckbox}></Input>
					Free
				</FormGroup>
				<FormGroup>
					<Input
						type="radio"
						name="abonnement"
						value="premium"
						onChange={handleCheckbox}></Input>
					Premium
				</FormGroup>
				<FormGroup>
					<Input
						type="radio"
						name="abonnement"
						value="basic"
						onChange={handleCheckbox}></Input>
					Basic
				</FormGroup>

				<h4> Vous avez choisi {abonnement} Passer à l'étape suivante </h4>

				<Button type="submit">Passer</Button>
				<div div>
					<Link className="link" to="/register-joueur">
						suivante
					</Link>
				</div>
			</Form>
		</>
	);
};
