import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import { Link } from "react-router-dom";

export default function StatForm(props) {
	const addStat = "Add";
	const [Titre, setTitre] = useState("");
	const [description, setDescription] = useState("");
	const [timer, setTimer] = useState("");
	const [lien, setlien] = useState("");
	const [Visible, setVisible] = useState("");
	const [maxmin, setMaxMin] = useState("");
	function handleAddStat() {
		props.addStat(Titre, description, timer, lien, Visible, maxmin);
	}
	return (
		<>
			<Form className="ajoutStat">
				<FormGroup>
					<Label> Titre de la Statistique </Label>
					<Input
						type="text"
						name="Titre"
						id=""
						required
						value={Titre}
						onChange={(e) => setTitre(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Description </Label>
					<Input
						type="textarea"
						name="description"
						required
						id=""
						value={description}
						onChange={(e) => setDescription(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Timer (mn) </Label>
					<Input
						type="number"
						name="timer"
						required
						id=""
						value={timer}
						onChange={(e) => setTimer(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Lien vidéo </Label>
					<Input
						type="text"
						name="lien"
						required
						id=""
						value={lien}
						onChange={(e) => setlien(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Visible </Label>
					<select value={Visible} onChange={(e) => setVisible(e.target.value)}>
						<option value="Oui">Oui</option>
						<option value="Non">Non</option>
					</select>
				</FormGroup>

				<FormGroup>
					<Label> Maximiser/Minimiser </Label>
					<select value={maxmin} onChange={(e) => setMaxMin(e.target.value)}>
						<option value="Maximiser">Maximiser</option>
						<option value="Minimiser">Minimiser</option>
					</select>
				</FormGroup>
				<Button color="success" type="button" onClick={handleAddStat}>
					{addStat}
				</Button>
			</Form>
		</>
	);
}
