import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { login } from "../../services/loginRegisterJoueur.service";
export const Login = () => {
	const initialValues = {
		email: "",
		password: "",
	};
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setTimeout(async () => {
			await login(formValues.email, formValues.password).then(
				(res) => {
					console.log(res);
					setFormErrors(res);
					localStorage.removeItem("token");
					localStorage.setItem("isCoach", false);
					localStorage.setItem("token", res.data.token);
					localStorage.setItem("isJoueur", true);
					// navigate('/');
					window.location = "/espace-seance-joueur";
				},
				(e) => {
					const resMessage =
						(e.response && e.response.data && e.response.data.msg) ||
						e.message ||
						e.toString();
					setFormErrors(resMessage);
				}
			);
		}, 300);
		setIsSubmit(true);
	};
	// useEffect(() => {
	// 	if (Object.keys(formErrors).length === 0 && isSubmit) {
	// 		console.log(formValues);
	// 	}
	// }, [formErrors]);

	return (
		<>
			{Object.keys(formErrors).length === 0 && isSubmit && (
				<div className="ui message success">Sign up successfully</div>
			)}
			<Form className="form" onSubmit={handleSubmit}>
				<FormGroup>
					<p></p>

					<Label> Email </Label>
					<Input type="text" name="email" onChange={handleChange}></Input>
				</FormGroup>
				<FormGroup>
					<Label> password </Label>
					<Input
						type="password"
						name="password"
						onChange={handleChange}></Input>
				</FormGroup>
				<Button type="submit">Login</Button>
			</Form>
		</>
	);
};
