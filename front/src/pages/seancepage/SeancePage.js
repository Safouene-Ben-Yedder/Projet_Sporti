import { useState, useEffect } from "react";
import { Heading } from "../../components/heading/Heading";
import SeanceForm from "../../components/seanceform/SeanceForm";
import SeanceList from "../../components/seancelist/SeanceList";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import {
	postSeance,
	fetchSeance,
	updateSeance,
	deleteSeance,
} from "../../services/seance.service";

export default function SeancePage() {
	/*	const [seances, setSeances] = useState([
		{
			id: 1,
			titre: "Séance YOGA",
			joueur: "Ali",
			horaire: 17,
			date: "2022-04-10",
			lieu: "Vicking bardo",
			competence: "30 secondes",
			objectif: "Améliorer les performances",
			statistique: "respiration",
			progseance: "Programme 1",
		},
		// {
		// 	id: 2,
		// 	titre: "Séance foot",
		// 	joueur: "Sonia",
		// 	horaire: 8,
		// 	date: "2022-04-06",
		// 	lieu: "Menzah",
		// 	competence: "40 secondes",
		// 	objectif: "Améliorer les performances",
		// 	statistique: "200 mètres",
		// 	progseance: "Programme 1",
		// },
		// {
		// 	id: 3,
		// 	titre: "Midi foot",
		// 	joueur: "Ahmed",
		// 	horaire: 12,
		// 	date: "2022-04-06",
		// 	lieu: "Ennahli",
		// 	competence: "60 secondes",
		// 	objectif: "Améliorer les performances",
		// 	statistique: "100 mètres",
		// 	progseance: "Programme 1",
		// },
	]); */

	const [isVisible, setIsVisible] = useState(false);
	const [Visible, setVisible] = useState(false);
	const [updateMode, setUpdateMode] = useState(false);
	const [FeedBack, setFeedBack] = useState(false);
	const [raison, setRaison] = useState("");
	const [feed, setFeed] = useState("");
	const [obj, setObj] = useState("");

	const [seances, setSeances] = useState([]);
	const [loading, setLoading] = useState(true);
	// console.log(loading);

	useEffect(() => {
		const fetchSeances = async () => {
			if (loading) {
				try {
					const res = await fetchSeance();

					setSeances(res);
					setLoading(false);
					// console.log(res);
				} catch (e) {
					setLoading(false);
				}
			}
		};

		fetchSeances();
	}, [seances]);

	const addSeances = async (
		titre,
		description,
		date,
		joueur,
		objectif,
		lieuentrainements,
		programmeSeances,
		competences,
		stats
	) => {
		const newSeance = await postSeance({
			titre,
			description,
			date,
			joueur,
			objectif,
			lieuentrainements,
			programmeSeances,
			competences,
			stats,
		});
		setSeances((Seance) => [...Seance, { ...newSeance }]);
	};
	const UpdateSeances = async (
		id,
		titre,
		description,
		date,
		joueur,
		objectif,
		lieuentrainements,
		programmeSeances,
		competences,
		stats
	) => {
		await updateSeance(
			id,
			titre,
			description,
			date,
			joueur,
			objectif,
			lieuentrainements,
			programmeSeances,
			competences,
			stats
		);
		const newSeance = seances.map((Seance) =>
			Seance.id === id
				? {
						id,
						titre,
						date,
						description,
						joueur,
						objectif,
						lieuentrainements,
						programmeSeances,
						competences,
						stats,
				  }
				: Seance
		);
		setSeances(newSeance);
	};

	const deleteSeances = async (id) => {
		await deleteSeance(id);
		const newSeance = seances.filter((Seance) => Seance._id !== id);
		setSeances(newSeance);
		//	setLoading(true);
	};

	/* function addSeance(
		titre,
		description,
		date,
		objectif,
		competence,
		statistique
		lieu,
		joueur,
		competences,
	
		
	) {
		setSeances([
			...seances,
			{
				id: seances.length + 1,
				titre: titre,
				joueur: joueur,
				horaire: horaire,
				date: date,
				lieu: lieu,
				competence: competence,
				objectif: objectif,
				statistique: statistique,
			},
		]);
	}
	function UpdateSeance(
		id,
		titre,
		joueur,
		horaire,
		date,
		lieu,
		competence,
		objectif,
		statistique
	) {
		const newSeances = seances.map((seance) =>
			seance.id === id
				? {
						id,
						titre,
						joueur,
						horaire,
						date,
						lieu,
						competence,
						objectif,
						statistique,
				  }
				: seance
		);
		setSeances(newSeances);
	}
	const supp = () => {
		setIsVisible(!isVisible);
	};
	const avis = () => {
		setVisible(!isVisible);
	};
	function deleteSeance(id) {
		setSeances(seances.filter((index) => index.id !== id));
	} */

	const supp = () => {
		setIsVisible(!isVisible);
	};
	const avis = () => {
		setVisible(!isVisible);
	};
	return (
		<div className="App">
			<>
				<Heading />
				<h2> Ajouter une séance</h2>
				<SeanceForm addSeance={addSeances} />
				<hr></hr>
				<h2> Liste des séances </h2>
				<SeanceList
					seances={seances}
					deleteSeance={deleteSeances}
					UpdateSeance={UpdateSeances}
					supp={supp}
					avis={avis}
				/>
				{isVisible && (
					<>
						{!updateMode ? (
							<>
								<Form>
									<FormGroup>
										<h3>
											<Label> Raison pour annulation </Label>
										</h3>
										<select
											value={raison}
											onChange={(e) => setRaison(e.target.value)}>
											<option value="r1">absence du joueur</option>
											<option value="r2">imptempérie</option>
										</select>
										<Button
											color="success"
											type="button"
											onClick={() => setUpdateMode(true)}>
											Envoyer
										</Button>
									</FormGroup>
								</Form>
							</>
						) : (
							<>
								<h5>Réponse envoyée!</h5>
							</>
						)}
					</>
				)}
				{Visible && (
					<>
						{!FeedBack ? (
							<>
								<Form>
									<FormGroup>
										<h3>
											<Label> Donner FeedBack </Label>
										</h3>
										<Input
											name="avis"
											value={feed}
											type="textarea"
											onChange={(e) => setFeed(e.target.value)}
										/>
										<h3>
											<Label> Dire si objectif est atteint </Label>
										</h3>
										<select
											value={obj}
											onChange={(e) => setObj(e.target.value)}>
											<option value="r1">OUI</option>
											<option value="r2">NON</option>
										</select>
										<Button
											color="success"
											type="button"
											onClick={() => setFeedBack(true)}>
											Envoyer
										</Button>
									</FormGroup>
								</Form>
							</>
						) : (
							<>
								<h5>Réponse envoyée!</h5>
							</>
						)}
					</>
				)}
			</>
		</div>
	);
}
