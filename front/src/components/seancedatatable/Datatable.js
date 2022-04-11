import React from "react";

export default function Datatable({ seances }) {
	const columns = seances[0] && Object.keys(seances[0]);
	return (
		<table cellPadding={0} cellSpacing={0}>
			<thead>
				<tr>{seances[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
			</thead>
			<tbody>
				{seances.map((row) => (
					<tr>
						{columns.map((column) => (
							<td>{row[column]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table> 
	);
}
