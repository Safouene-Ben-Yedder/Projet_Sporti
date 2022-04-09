import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarText } from "reactstrap";

export const HeaderInvite = () => {
	return (
		<Navbar color="primary">
			<NavbarText className="h3 row col-12 d-flex justify-content-center text-white">
				Invite Player
			</NavbarText>
		</Navbar>
	);
};
