import React, { useEffect, useState } from "react"
import { ListGroup, ListGroupItem } from "reactstrap";
import { useParams } from "react-router-dom";
import { readPlayer } from "../../services/login.service";

export default function ProfilJoueur() {
  const [loading, setLoading] = useState(true)
    const [joueur, setJoueur] = useState({})
    
    const { id } = useParams();

    useEffect(() => {
      const fetchData = async () => {
        const result = await readPlayer(id);
        console.log(result)
        setJoueur(result[0]);
        console.log(joueur);
        setLoading(false);
      };
      fetchData();
    }, [id]);
  
    return (
    <div>
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
          <ListGroup>
            <ListGroupItem>
              <div className="bold">Nom : {joueur.nom}</div> 
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">Prénom : {joueur.prenom}</div> 
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">Date de naissance : {joueur.dateNaissance}</div> 
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">email : {joueur.email}</div> 
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">Poids: {joueur.poids}</div> 
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">IMC : {joueur.IMC}</div> 
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">Droitier: {joueur.droit}</div> 
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">taille : {joueur.taille}</div> 
            </ListGroupItem>
           
        </ListGroup>
        </>
      )} 
        
       
        </div>
    );
  }