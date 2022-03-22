import { useState } from "react";
import { Button, Label } from "reactstrap";
import "./Lieu.css";
export default function Lieu({
	nom,
	ville,
	pays,
    adresse,
	UpdateLieu,
	deleteLieu,
	id,
}) {
	const [updateMode, setUpdateMode] = useState(false);
	const [nomtoUpdate, setNomtoUpdate] = useState(nom);
	const [villetoUpdate, setVilletoUpdate] = useState(ville);
	const [paystoUpdate, setPaystoUpdate] = useState(pays);
	const [adressetoUpdate, setAdressetoUpdate] = useState(adresse);

	return (
		<div className="Lieu">
			{!updateMode ? (
				<>
					<div className="nom">{nom}</div>
					<div className="ville">{ville}</div>
                    <div className="pays">{pays}</div>
                    <div className="adresse">{adresse}</div>
					<div className="actions">
						<Button color="primary" onClick={() => setUpdateMode(true)}>
							Update
						</Button>
						<Button color="danger" onClick={()=>deleteLieu(id)}>Delete</Button>
					</div>
				</>
			) : (
				<div>
					<Label>
						Nom
						<input
							type="text"
							name="lieuEntrainement"
							value={nomtoUpdate}
							onChange={(e) => setNomtoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						Ville
						<input
							type="text"
							name="lieuEntrainement"
							value={villetoUpdate}
							onChange={(e) => setVilletoUpdate(e.target.value)}
						/>
					</Label>
					<Label>
						{" "}
						Pays
						<input
							type="text"
							name="lieuEntrainement"
							value={paystoUpdate}
							onChange={(e) => setPaystoUpdate(e.target.value)}
						/>{" "}
					</Label>
					<Label>
						{" "}
						Adresse
						<input
							type="text"
							name="lieuEntrainement"
							value={adressetoUpdate}
							onChange={(e) => setAdressetoUpdate(e.target.value)}
						/>{" "}
					</Label>

					<Button
						color="primary"
						type="button"
						onClick={() => {
							UpdateLieu(
								Number(id),
								nomtoUpdate,
								villetoUpdate,
								paystoUpdate,
								adressetoUpdate,

							);
							setUpdateMode(false);
						}}>
						Update
					</Button>
				</div>
			)}
		</div>
	);
}
