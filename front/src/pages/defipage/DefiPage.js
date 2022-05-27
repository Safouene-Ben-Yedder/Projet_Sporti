import { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Heading } from "../../components/heading/Heading";
import DefiForm from "../../components/defiform/DefiForm";
import DefiList from "../../components/defilist/DefiList";

import {
	postDefi,
	fetchDefi,
	updateDefi,
	deleteDefi,
} from "../../services/defi.service";

export default function DefiPage() {
	//	const [defis, setDefis] = useState([
	/*	{
			id: 1,
			nom: "learn Html",
			description: 5,
			objectif: "IT",
			lienVideo: "1",
			periode:"",
			joueurs:[],
		},  */
	//	]);
	const [updateMode, setUpdateMode] = useState(false);
	const [periode, setPeriode] = useState("");
	const [isVisible, setIsVisible] = useState(false);
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

	const assigner = () => {
		setIsVisible(!isVisible);
	};
	/*
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
	function UpdateDefi(id, nom, description, objectif, lienVideo) {
		const newDefis = defis.map((defi) =>
			defi.id === id ? { id, nom, description, objectif, lienVideo } : defi
		);
		setDefis(newDefis);
	}
	function deleteDefi(id) {
		setDefis(defis.filter((index) => index.id !== id));
	}  */

	const [Defi, setDefi] = useState([]);
	const [loading, setLoading] = useState(false);
	console.log(loading);

	useEffect(() => {
		const fetchDefis = async () => {
			setLoading(true);
			try {
				const res = await fetchDefi();

				setDefi(res);
				setLoading(false);
			} catch (e) {
				setLoading(false);
			}
		};

		fetchDefis();
	}, [Defi]);

	const addDefis = async (nom, description, lienVideo, objectif) => {
		const newDefi = await postDefi({
			nom,
			description,
			lienVideo,
			objectif,
			//	date,
		});
		setDefi((Defi) => [...Defi, { ...newDefi }]);
	};
	const UpdateDefis = async (
		id,
		nom,
		description,
		lienVideo,
		objectif
		//	date
	) => {
		await updateDefi(id, nom, description, lienVideo, objectif);
		const newDefi = Defi.map((Defi) =>
			Defi.id === id ? { id, nom, description, lienVideo, objectif } : Defi
		);
		setDefi(newDefi);
	};

	const deleteDefis = async (id) => {
		await deleteDefi(id);
		const newDefi = Defi.filter((Defi) => Defi.id !== id);
		setDefi(newDefi);
		setLoading(true);
	};

	return (
		<div className="App">
			<>
				<Heading />
				<h2> Ajouter un defi</h2>
				<DefiForm addDefi={addDefis} />
				<hr></hr>
				<h2> Liste des defis </h2>
				<DefiList
					defis={Defi}
					assigner={assigner}
					UpdateDefi={UpdateDefis}
					deleteDefi={deleteDefis}
					setLoading={setLoading}
				/>
				{isVisible && (
					<>
						{!updateMode ? (
							<>
								<Form>
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

												<Input type="checkbox" value={joueur.nom} />
											</Label>
										))}
										<Button
											color="success"
											type="button"
											onClick={() => setUpdateMode(true)}>
											Assigner
										</Button>
									</FormGroup>
								</Form>
							</>
						) : (
							<>
								<h5>Ce défi est assigné!</h5>
							</>
						)}
					</>
				)}
			</>
		</div>
	);
}
