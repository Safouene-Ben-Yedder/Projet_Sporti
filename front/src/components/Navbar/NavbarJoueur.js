import React from "react";
import { Link } from "react-router-dom";
import { Navbar,NavItem, NavbarBrand } from "reactstrap";

export const NavbarJoueur = () => {
	return (
		<Navbar color="dark" dark>
			<NavbarBrand href="/modifier">Liste joueur</NavbarBrand>
            <NavbarBrand href="/Competence">Competence</NavbarBrand>
            <NavbarBrand href="/Stat">statistique</NavbarBrand>
            <NavbarBrand href="/defi-page">Défi</NavbarBrand>
			<NavItem>
					<Link className="btn btn-primary " to="/">
						Se déconnecter
					</Link>
				</NavItem>
		</Navbar>
	)
}