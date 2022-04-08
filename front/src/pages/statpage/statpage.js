import { useState } from "react";
import StatForm from "../../components/statform/statform";
import StatList from "../../components/statlist/statlist";
import { Heading } from "../../components/heading/Heading";

export default function StatPage() {
	const [Stat, setStat] = useState([
		{
			id: 1,
			Titre: "tennis",
			description: "tennis",
			lienVideo: "1",
			Visible: "true",
			timer: 5,
			maxmin: "Maximiser",
		},
	]);
	function addStat(Titre, description, lienVideo, Visible, timer, maxmin) {
		setStat([
			...Stat,
			{
				id: Stat.length + 1,
				Titre: Titre,
				description: description,
				lienVideo: lienVideo,
				Visible: Visible,
				timer: timer,
				maxmin: maxmin,
			},
		]);
	}
	function UpdateStat(
		id,
		Titre,
		description,
		lienVideo,
		Visible,
		timer,
		maxmin
	) {
		const newStat = Stat.map((Stat) =>
			Stat.id === id
				? { id, Titre, description, lienVideo, Visible, timer, maxmin }
				: Stat
		);
		setStat(newStat);
	}
	function deleteStat(id) {
		setStat(Stat.filter((index) => index.id !== id));
	}
	return (
		<div className="App">
			<>
				<Heading />
				<h2> Ajouter une Stat</h2>
				<StatForm addStat={addStat} />
				<hr></hr>
				<h2> Liste des Stats </h2>
				<StatList Stat={Stat} UpdateStat={UpdateStat} deleteStat={deleteStat} />
			</>
		</div>
	);
}
