import { useState } from "react";
import { Heading } from "../../components/heading/Heading";
import SeanceForm from "../../components/seanceform/SeanceForm";
import Datatable from "../../components/seancedatatable/Datatable";

export default function SeancefilterPage() {
	const [q, setQ] = useState("");
	const [searchColumns, setSearchColumns] = useState([
		"id",
		"titre",
		"description",
		"date",
		"competence",
		"objectif",
		"aatteindre",
		"horraire",
		"lieu",
		"reccurente",
		"periode",
	]);
	const [seances, setSeances] = useState([
		{
			id: 1,
			titre: "Foot",
			description: "Faire du football",
			date: "2022-04-06",
			competence: "Football",
			objectif: "améliorer les performances",
			aatteindre: "minimum 7 matches",
			horraire: "20:20",
			lieu: "Tunis",
			reccurente: true,
			periode: 25,
		},
		{
			id: 2,
			titre: "Basketball",
			description: "Faire de basketball",
			date: "2022-04-06",
			competence: "Basketball",
			objectif: "améliorer les performances",
			aatteindre: "minimum 7 matches",
			horraire: "20:20",
			lieu: "Tunis",
			reccurente: true,
			periode: 25,
		},
		{
			id: 3,
			titre: "Musculation",
			description: "Faire de musculation",
			date: "2022-04-06",
			competence: "Musculation",
			objectif: "améliorer les performances",
			aatteindre: "minimum 7 matches",
			horraire: "20:20",
			lieu: "Tunis",
			reccurente: true,
			periode: 25,
		},
	]);

	function search(rows) {
		return rows.filter((row) =>
			searchColumns.some(
				(column) =>
					row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
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
