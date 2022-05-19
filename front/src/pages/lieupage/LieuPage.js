import { useState, useEffect } from "react";
import { Heading } from "../../components/heading/Heading";
import LieuForm from "../../components/lieuForm/LieuForm";
import LieuList from "../../components/lieuList/LieuList";
import { postLieu , fetchLieu, updateLieu, deleteLieu} from "../../services/lieu.service";

export default function LieuPage() {
	const [Lieu, setLieu] = useState([]);
	const [loading, setLoading] = useState(false);
	console.log(loading);

	useEffect(() => {
		const fetchLieux = async () => {
			setLoading(true);
			try {
				const res = await fetchLieu();
				setLieu(res);
				setLoading(false);
				console.log(res);
			} catch (e) {
				setLoading(false);
			}
		};
		fetchLieux();
	}, []);

	const addLieux = async (nom, ville, pays, adresse) => {
		const newLieu = await postLieu({nom, ville, pays, adresse}) ;
		setLieu((Lieu) => [
			...Lieu,{ ...newLieu }]);
	}
	const UpdateLieux = async (id, nom, ville, pays, adresse) => {
		await updateLieu(id, nom, ville, pays, adresse);
		const newLieu = Lieu.map((Lieu) =>
			Lieu.id === id ? { id, nom, ville, pays, adresse } : Lieu
		)
		setLieu(newLieu)
	}
	
	const deleteLieux = async(id) => {
		await deleteLieu(id)
		const newLieu = Lieu.filter((Lieu) => Lieu.id !== id);
		setLieu(newLieu);
	}

	return (
		<div className="App">
			<>
				<Heading />
				<h2>Ajouter un lieu d'entrainement</h2>
				<LieuForm addLieu={addLieux} />
				<h2>Liste des lieux d'entrainement</h2>
				<LieuList Lieu={Lieu} UpdateLieu={UpdateLieux} deleteLieu={deleteLieux} />
			</>
		</div>
	);
}
