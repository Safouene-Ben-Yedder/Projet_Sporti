import { useState } from "react";
import HeadingNowPlayer from "../../components/heading/HeadingNowPlayer";
import SeancetodayList from "../../components/seancelist/SeancetodayList";

export default function SeancetodayPagePlayer() {
	const [seances] = useState([
		{
			id: 1,
			titre: "Séance YOGA",
			joueur: "Ali",
			horaire: 17,
			date: "2022-05-27",
			lieu: "Vicking bardo",
			competence: "30 secondes",
			objectif: "Améliorer les performances",
			statistique: "respiration",
			progseance: "Programme 1",
		},
		{
			id: 2,
			titre: "Séance foot",
			joueur: "Sonia",
			horaire: 8,
			date: "2022-04-06",
			lieu: "Menzah",
			competence: "40 secondes",
			objectif: "Améliorer les performances",
			statistique: "200 mètres",
			progseance: "Programme 1",
		},
		{
			id: 3,
			titre: "Midi foot",
			joueur: "Ahmed",
			horaire: 12,
			date: "2022-04-06",
			lieu: "Ennahli",
			competence: "60 secondes",
			objectif: "Améliorer les performances",
			statistique: "100 mètres",
			progseance: "Programme 1",
		},
	]);

	return (
		<div className="App">
			<>
				<HeadingNowPlayer />

				<h2> Liste des séances d'aujourd'hui </h2>

				<SeancetodayList seances={seances} />
			</>
		</div>
	);
}
