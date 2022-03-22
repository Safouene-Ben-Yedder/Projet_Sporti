import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
export const Paiementform = () => {
	const [abonnement, setAbonnement] = useState();

	return (
		<>
			<h2> Choisir votre abonnement</h2>
			<Form className="ajout">
				<FormGroup>
					<Input
						type="radio"
						name="abonnement"
						value="free"
						onChange={(e) => setAbonnement(e.target.value)}></Input>{" "}
					Free
				</FormGroup>
				<FormGroup>
					<Input
						type="radio"
						name="abonnement"
						value="premium"
						onChange={(e) => setAbonnement(e.target.value)}></Input>{" "}
					Premium
				</FormGroup>
				<FormGroup>
					<Input
						type="radio"
						name="abonnement"
						value="other"
						onChange={(e) => setAbonnement(e.target.value)}></Input>{" "}
					Other
				</FormGroup>

				<h4> Vous avez choisi {abonnement} Passer à l'étape suivante </h4>
				<Button color="success" type="button">
					Passer
				</Button>
			</Form>
		</>
	);
};
