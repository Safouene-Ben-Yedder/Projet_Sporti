import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import { Link } from "react-router-dom";

export default function StatForm(props) {
	const addStat = "Add";
	const [Titre, setTitre] = useState("");
	const [description, setDescription] = useState("");
	const [Visvible, setVisible] = useState("");
	const [lienVideo, setLienVideo] = useState("");
	const [timer, setTimer] = useState("");
	const [maxmin, setMaxMin] = useState("");
	function handleAddStat() {
		props.addStat(Titre, description, Visvible, lienVideo, timer, maxmin);
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
					<Label> Timer </Label>
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
						name="lienVideo"
						required
						id=""
						value={lienVideo}
						onChange={(e) => setLienVideo(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> Visible </Label>
					<Input
						type="checkbox"
						name="Visible"
						required
						id=""
						value={Visvible}
						onChange={(e) => setVisible(e.target.value)}></Input>
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
