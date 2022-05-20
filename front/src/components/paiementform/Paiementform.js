import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "./paiement.css";
import { updateAbonnement } from "../../services/login.service";
export const PaiementForm = () => {
	const [abonnement, setAbonnement] = useState();
	const [isSubmit, setIsSubmit] = useState(false);

	const handleCheckbox = (e) => {
		const target = e.target;
		const value = target.value;
		setAbonnement(value);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await updateAbonnement(abonnement);
			setAbonnement({ abonnement: "" });
			console.log(res);
			setIsSubmit(true);
		} catch (err) {
			console.error(err.message);
			console.log("login failed!");
		}
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
