import { useState } from "react";
import { Heading } from "../../components/heading/Heading";
import SeanceForm from "../../components/seanceform/SeanceForm";
import Datatable from "../../components/seancedatatable/Datatable";

export default function SeancefilterPage() {
	const [q, setQ] = useState("");
	const [searchColumns, setSearchColumns] = useState([
		"titre",
		"joueur",
		"date",
		"competence",
		"objectif",
		"statiqtique",
		"horaire",
		"lieu",
	]);

	const [seances, setSeances] = useState([
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
			titre: "Mini foot",
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

	function search(rows) {
		return rows.filter((row) =>
			searchColumns.some(
				(column) =>
					("" + row[column]).toString().toLowerCase().indexOf(q.toLowerCase()) >
					-1
			)
		);
	}

	const columns = seances[0] && Object.keys(seances[0]);
	return (
		<div>
			<div>
				<input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
				{columns &&
					columns.map((column) => (
						<label>
							<input
								type="checkbox"
								//	checked={searchColumns.includes(column)}
								onChange={(e) => {
									const checked = searchColumns.includes(column);
									setSearchColumns((prev) =>
										checked
											? prev.filter((sc) => sc !== column)
											: [...prev, column]
									);
								}}
							/>
							{column}
						</label>
					))}
			</div>
			<div>
				<Datatable seances={search(seances)} />
			</div>
		</div>
	);
}
