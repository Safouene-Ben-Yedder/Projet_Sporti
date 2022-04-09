import React from "react";
import { Link } from "react-router-dom";
import { Navbar,NavItem,  Nav, NavbarBrand } from "reactstrap";

export const NavbarJoueur = () => {
	return (
		<Navbar color="dark" dark>
			<NavbarBrand href="/profileJoueur">Profil</NavbarBrand>
            <NavbarBrand href="/Competence">Competence</NavbarBrand>
            <NavbarBrand href="/Stat">statistique</NavbarBrand>
            <NavbarBrand href="/">Alerte</NavbarBrand>
			<NavItem>
					<Link className="btn btn-primary " to="/">
						Se déconnecter
					</Link>
				</NavItem>
		</Navbar>
	)
}