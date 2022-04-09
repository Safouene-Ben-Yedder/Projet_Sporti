import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import { Link } from "react-router-dom";
import "./eventform.css";
export default function EventForm(props) {
	const addTask = "Add";
	const [nom, setNom] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");
	const [publique, setPublique] = useState("");

	function handleAddEvent() {
		props.addEvent(nom, description, date, publique);
	}
	return (
		<>
			<Form className="ajout">
				<FormGroup>
					<Label> nom </Label>
					<Input
						type="text"
						name="programme"
						id=""
						value={nom}
						onChange={(e) => setNom(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> description </Label>
					<Input
						type="text"
						name="description"
						id=""
						value={description}
						onChange={(e) => setDescription(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> date </Label>
					<Input
						type="text"
						name="date"
						id=""
						value={date}
						onChange={(e) => setDate(e.target.value)}></Input>
				</FormGroup>
				<FormGroup>
					<Label> publique </Label>
					<Input
						type="text"
						name="publique"
						id=""
						value={publique}
						onChange={(e) => setPublique(e.target.value)}></Input>
				</FormGroup>
			
				<Button color="success" type="button" onClick={handleAddEvent}>
					{addTask}
				</Button>
			</Form>
		</>
	);
}
