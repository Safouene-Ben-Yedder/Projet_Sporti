import {useState} from "react";
import { Heading } from "../../components/heading/Heading";
import LieuForm from "../../components/lieuForm/LieuForm"
import LieuList from "../../components/lieuList/LieuList"
import Lieu from "../../components/lieu/Lieu";

export default function LieuPage(){
	const [Lieu, setLieu] = useState([
		{
			id: 1,
			nom: "Rades",
			ville: "Ben Arous",
			pays: "Tunisie",
			adresse: "Ben Arous",
		},
		{
			id: 2,
			nom: "15 octobre",
			ville: "Bizerte",
			pays: "Tunisie",
			adresse: "Bizerte",
		},
		{
			id: 3,
			nom: "Menzah",
			ville: "Ariana",
			pays: "Tunisie",
			adresse: "10 dec",
		},
	]);
	function addLieu(nom, ville, pays, adresse) {
		setLieu([...Lieu,{id: Lieu.length + 1,
				nom: nom,
				ville: ville,
				pays: pays,
				adresse: adresse,
			},
		]);
	}
	function UpdateLieu(id, nom, ville,	pays, adresse) {
		const newLieu= Lieu.map((Lieu) =>
                Lieu.id === id
				? { id, nom, ville, pays, adresse }
				: Lieu
		);
		setLieu(newLieu);
	}
	const deleteLieu = (id) => {
		const newLieu = Lieu.filter(Lieu=>Lieu.id!==id)
		setLieu(newLieu)
	  }
	return(
		<div className="App">
			<>
				<Heading/>
				<h2>Ajouter un lieu d'entrainement</h2>
				<LieuForm addLieu={addLieu}/>
				<h2>Liste des lieux d'entrainement</h2>
				<LieuList
					Lieu={Lieu}
					UpdateLieu={UpdateLieu}
					deleteLieu={deleteLieu}
				/>
			</>
		</div>
	);
}