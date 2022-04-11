import Pagination from "./Pagination";
import { Heading } from "../../components/heading/Heading";
import SeanceForm from "../../components/seanceform/SeanceForm";
import Datatable from "../../components/seancedatatable/Datatable";
import React, { useState, useMemo } from "react";
import "./style.scss";
let PageSize = 10;

export default function SeancefilterPage() {
	const [q, setQ] = useState("");
	const [searchColumns, setSearchColumns] = useState([
		"joueur",
		"date",
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
	]);

	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return seances.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

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
								checked={searchColumns.includes(column)}
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
				{search(currentTableData).map((item) => {
					// return <Datatable seances={search(seances)} />;
					return (
						// <Datatable seances={search(seances)} />

						<tr>
							<td>{item.id}</td>
							<td>{item.titre}</td>
							<td>{item.joueur}</td>
							<td>{item.horaire}</td>
							<td>{item.date}</td>
							<td>{item.lieu}</td>
							<td>{item.competence}</td>
							<td>{item.object}</td>
							<td>{item.statistique}</td>
							<td>{item.progseance}</td>
						</tr>
					);
				})}

				<Pagination
					className="pagination-bar"
					currentPage={currentPage}
					totalCount={seances.length}
					pageSize={PageSize}
					onPageChange={(page) => setCurrentPage(page)}
				/>
			</div>
		</div>
	);
}
