import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Heading } from "../../components/heading/Heading";
import DefiForm from "../../components/defiform/DefiForm";
import DefiList from "../../components/defilist/DefiList";

export default function DefiPage() {
	const [defis, setDefis] = useState([
		{
			id: 1,
			nom: "learn Html",
			description: 5,
			objectif: "IT",
			lienVideo: "1",
			periode:"",
			joueurs:[],
		},
		
	]);
	const [updateMode, setUpdateMode] = useState(false);
	const [periode, setPeriode] = useState("");
	const [isVisible, setIsVisible]= useState(false);
    const joueurs = [
        {
          nom: "lazzem",
          prenom: "aya",
        },
        {
            nom: "jendoubi",
            prenom: "syrine",
        },
      ];
      const assigner=()=>{
         setIsVisible(!isVisible)
        }

	function addDefi(nom, description, objectif, lienVideo) {
		setDefis([
			...defis,
			{
				id: defis.length + 1,
				nom: nom,
				description: description,
				objectif: objectif,
				lienVideo: lienVideo,
			},
		]);
	}
	function UpdateDefi(
		id,
		nom,
		description,
		objectif,
		lienVideo
	) {
		const newDefis = defis.map((defi) =>
			defi.id === id
				? { id, nom, description, objectif, lienVideo }
				: defi
		);
		setDefis(newDefis);
	}
	function deleteDefi(id) {
		setDefis(defis.filter((index) => index.id !== id));
	}
	return (
		<div className="App">
			<>
				<Heading />
				<h2> Ajouter un defi</h2>
				<DefiForm addDefi={addDefi} />
				<hr></hr>
				<h2> Liste des defis </h2>
				<DefiList
					defis={defis}
					assigner={assigner}
					UpdateDefi={UpdateDefi}
					deleteDefi={deleteDefi}	
				/>
				{isVisible &&
						<>
						{!updateMode ? (
							<>
						<Form >
							<FormGroup>
								<Label>
								Période
								<input
									type="date"
									name="periode"
									value={periode}
                                    onChange={(e) => setPeriode(e.target.value)}
								/>
								</Label>
								{joueurs.map((joueur) => (
							
									<Label check>
									{joueur.nom} 
									
									<Input type="checkbox" value={joueur.nom}  />
                                    </Label>
								))}
								<Button color="success" type="button" onClick={() => setUpdateMode(true)}>
										Assigner
								</Button>
							</FormGroup>
						</Form>
						</>
						):(
							<>
							<h5>Ce défi est assigné!</h5>
							</>
							
						)
					}
						</>
			} 

			</>
			
		</div>
	);
}