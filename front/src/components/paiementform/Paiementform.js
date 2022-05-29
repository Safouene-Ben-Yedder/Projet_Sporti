import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
//import { Link } from "react-router-dom";
import "./paiement.css";
import {
	updateAbonnement,
	showProfile,
} from "../../services/abonnement.service";

export const PaiementForm = () => {
	useEffect(() => {
		const fetchData = async () => {
			const gg = await showProfile();
			console.log(gg);
			if (gg) {
				setData(gg);
			}
		};

		fetchData();
	}, []);
	const [abonnement, setAbonnement] = useState();
	const [isSubmit, setIsSubmit] = useState(false);
	const [data, setData] = useState({ abonnement: "" });
	const handleCheckbox = (e) => {
		const target = e.target;
		const value = target.value;
		console.log("value check box ", value);
		setAbonnement(value);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await updateAbonnement(abonnement);
			console.log(res);
			setIsSubmit(true);
			// redirection vers register joueur
			window.location = "/invitation";
		} catch (err) {
			console.error(err.message);
			console.log("okay");
		}
	};

	return (
		<>
			<h2 className="titreAbonnement"> Choisir votre abonnement</h2>
			<h3 className="Center"> Votre Abonnement {data.abonnement}</h3>
			{isSubmit && (
				<div className="ui message success">Sign up successfully</div>
			)}

			<Form className="ajout" onSubmit={handleSubmit}>
				<FormGroup>
					{data.abonnement === "Free" ? (
						<></>
					) : (
						<>
							{" "}
							<Input
								type="radio"
								name="abonnement"
								value="Free"
								onChange={handleCheckbox}></Input>
							Free{" "}
						</>
					)}
				</FormGroup>
				<FormGroup>
					{data.abonnement === "Premium" ? (
						<></>
					) : (
						<>
							{" "}
							<Input
								type="radio"
								name="abonnement"
								value="Premium"
								onChange={handleCheckbox}></Input>
							Premium{" "}
						</>
					)}
				</FormGroup>
				<FormGroup>
					{data.abonnement === "Basic" ? (
						<></>
					) : (
						<>
							{" "}
							<Input
								type="radio"
								name="abonnement"
								value="Basic"
								onChange={handleCheckbox}></Input>
							Basic{" "}
						</>
					)}
				</FormGroup>

				<h4> Vous avez choisi {abonnement} Passer à l'étape suivante </h4>

				<Button name="btn-paiement" type="submit">
					Passer
				</Button>
				{/* <div div>
					<Link className="link" to="/paiement">
						suivante
					</Link>
				</div> */}
			</Form>
		</>
	);
};
