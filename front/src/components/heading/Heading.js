import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";

export const Heading = () => {
	return (
		<Navbar color="dark" dark>
			<NavbarBrand href="/">Sporti</NavbarBrand>
			<Nav>
				<NavItem>
					<Link className="btn btn-primary " to="/">
						Profil
					</Link>
				</NavItem>
			</Nav>
		</Navbar>
	);
};
