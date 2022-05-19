import { useEffect, useState } from "react";
import StatForm from "../../components/statform/statform";
import StatList from "../../components/statlist/statlist";
import { NavbarJoueur } from "../../components/Navbar/NavbarJoueur";
import { Delstat, fetchStat, UpStat } from "../../services/stat.service";
import { addStat as newStat } from "../../services/stat.service";
export default function StatPage() {
	const [Stat, setStat] = useState([]);
	const [error, setError] = useState();
	console.log(error);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await fetchStat();
				setStat(result);
			} catch (e) {
				setError("An error occurred when we tried to fetch tasks");
			}
		};
		console.log("useEffect");

		fetchData();
	}, []);
	const addStat = async (Titre, description, timer, lien, Visible, maxmin) => {
		try {
			const result = await newStat({
				Titre,
				description,
				timer,
				lien,
				Visible,
				maxmin,
			});

			setStat([
				...Stat,
				{
					...result,
				},
			]);
		} catch (e) {
			setError("An error occurred when we tried to fetch stats");
		}
	};
	const UpdateStat = async (
		id,
		Titre,
		description,
		timer,
		lien,
		Visible,
		maxmin
	) => {
		await UpStat(id, { Titre, description, timer, lien, Visible, maxmin });
		const newStat = Stat.map((Stat) =>
			Stat.id === id
				? { Titre, description, timer, lien, Visible, maxmin }
				: Stat
		);
		setStat(newStat);
	};
	const deleteStat = async (id) => {
		await Delstat(id);
		setStat(Stat.filter((index) => index.id !== id));
	};
	return (
		<div className="App">
			<>
				<NavbarJoueur />
				<h2> Ajouter une Stat</h2>
				<StatForm addStat={addStat} />
				<hr></hr>
				<h2> Liste des Stats </h2>
				<StatList Stat={Stat} UpdateStat={UpdateStat} deleteStat={deleteStat} />
			</>
		</div>
	);
}
