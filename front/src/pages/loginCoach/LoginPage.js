import React from "react";

import { HeaderLoginCoach } from "../../components/heading/HeaderLoginCoach";

import { LoginForm } from "../../components/LoginFormCoach/LoginForm";

export default function LoginPage (){
	return (
		<div className="App">
			<>
        <HeaderLoginCoach/>
        <LoginForm />
			</>
		</div>
	);
};