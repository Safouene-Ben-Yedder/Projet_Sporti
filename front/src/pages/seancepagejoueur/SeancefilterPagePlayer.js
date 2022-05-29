import Pagination from "./Pagination";
import React, { useState, useMemo } from "react";
import "./style.scss";
import { Heading } from "../../components/heading/Heading";
let PageSize = 10;

export default function SeancefilterPagePlayer() {
	const [q, setQ] = useState("");
	const [searchColumns, setSearchColumns] = useState([
		"joueur",
		"date",
		"lieu",
	]);

	const [seances] = useState([
		{
			id: 1,
			titre: "FOOT",
			joueur: "Aymen",
			horaire: 17,
			date: "2021-08-10",
			lieu: "Iron Gym",
			competence: "32 secondes",
			objectif: "Améliorer les performances",
			statistique: "rapidité",
			progseance: "Plan de foot",
		},
		{
			id: 2,
			titre: "TENNIS",
			joueur: "Ameni",
			horaire: 8,
			date: "2022-04-06",
			lieu: "Menzah 1",
			competence: "24 secondes",
			objectif: "Améliorer les performances",
			statistique: "200 mètres",
			progseance: "Plan de tennis",
		},
		{
			id: 3,
			titre: "NATATION",
			joueur: "Sonia",
			horaire: 12,
			date: "2022-04-06",
			lieu: "Oxygen",
			competence: "40 secondes",
			objectif: "Améliorer les performances",
			statistique: "100 mètres",
			progseance: "Plan de natation",
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
				<Heading />
				<h1>Filtrer les séances : </h1>
				<input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
				{columns &&
					columns.map((column) => (
						<label>
							<input
								type="checkbox"
								checked={searchColumns.includes(column)}
								onChange={() => {
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
					return (
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
