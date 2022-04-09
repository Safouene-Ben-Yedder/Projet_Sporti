import { ListGroup, ListGroupItem } from "reactstrap";
export default function ProfilJoueur() {
    const joueurs = [
      {
        nom: "Lazzem",
        prenom: "Aya",
        date: "14/08/1998",
        email: "lazzemaya1@gmail.com",
        poids: "56",
        IMC: "21",
        droitier:"oui",
        taille:"162cm"
      },
    ];
  
    return (
    <div>
        
        {joueurs.map((joueur) => (
        <ListGroup>
            <ListGroupItem>
              <div className="bold">Nom : {joueur.nom}</div> 
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">Prénom : {joueur.prenom}</div> 
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">Date de naissance : {joueur.date}</div> 
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
              <div className="bold">Droitier: {joueur.droitier}</div> 
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">taille : {joueur.taille}</div> 
            </ListGroupItem>
           
        </ListGroup>
        ))}
        </div>
    );
  }