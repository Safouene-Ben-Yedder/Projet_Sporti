import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
export const EditProgrammeSeance = () => {
	return (
		<Form>
			<FormGroup>
				<Label> Titre </Label>
				<Input type="text" placeholder="Enter Name"></Input>
			</FormGroup>
			<Button type="submit">Edit</Button>
			<Link to="/" className="btn btn-danger ml-2">
				Cancel
			</Link>
		</Form>
	);
};
