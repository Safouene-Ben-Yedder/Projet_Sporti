import React from "react";
import { NavbarJoueur} from "../../components/Navbar/NavbarJoueur";

import { Link } from "react-router-dom";
import ListSeances from "../../components/listSeance/ListSeances";
import ProfilJoueur from "../../components/profileJoueur/ProfileJoueur";


const ProfilJoueurPage =()=>{
    return(
       <>
       <NavbarJoueur/>
       <h2>Profil Joueur</h2>
       <ProfilJoueur/>
        <Link className="link" to="/modifier">
						Modifier
					</Link>

        <br/>
        <br/>
        <div>
            <h2>nombre de séance & Objectif sportif</h2>
            <ListSeances/>

        </div>
        </>
    );
}
export default ProfilJoueurPage