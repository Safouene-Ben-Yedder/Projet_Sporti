import React from "react";
import HeadingLoginJoueur from "../../components/heading/HeadingLoginJoueur";
import { Login } from "../../components/login/Login";

export const LoginJoueurPage = () => {
	return (
		<div className="App">
			<>
				<HeadingLoginJoueur />
				<Login />
			</>
		</div>
	);
};
