import React from "react";
import { Navbar, NavbarText } from "reactstrap";

export default function HeadingRegisterJoueur() {
	return (
		<Navbar color="dark">
			<NavbarText className="h3 row col-12 d-flex justify-content-center text-white">
				Inscription joueur{" "}
			</NavbarText>
		</Navbar>
	);
}
