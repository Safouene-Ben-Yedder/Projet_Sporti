import { ListGroup, ListGroupItem } from "reactstrap";
export default function ListSeances() {
    const seances = [
      {
        nom: "Séance 1",
        date: "30/03/2022",
        periode: "5h",
        objectif: "parfait",
        objectifAtteint: "oui",
      },
    ];
  
    return (
      <div>
        {seances.map((seance) => (
        <ListGroup>
            <ListGroupItem>
            <div className="bold">Nombre de séance par semaine : {" "}{seances.length}</div>
          
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">Nom de la séance: {seance.nom}</div> 
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">Date de la séance: {seance.date}</div> 
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">Objectif: {seance.objectif}</div> 
            </ListGroupItem>
            <ListGroupItem>
              <div className="bold">Objectif atteint: {seance.objectifAtteint}</div>
            </ListGroupItem>
          </ListGroup>
        ))}
      </div>
    );
  }