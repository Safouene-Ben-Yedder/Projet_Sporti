import { useState } from "react";
import { Heading } from "../../components/heading/Heading";
import DefiForm from "../../components/defiform/DefiForm";
import DefiList from "../../components/defilist/DefiList";

export default function DefiPage() {
	const [defis, setDefis] = useState([
		{
			id: 1,
			nom: "learn Html",
			description: 5,
			objectif: "IT",
			lienVideo: "1",
		},
		{
			id: 2,
			nom: "learn React",
			description: 5,
			objectif: "IT",
			lienVideo: "1",
		},
		{
			id: 3,
			nom: "learn Angular",
			description: 5,
			objectif: "IT",
			lienVideo: "1",
		},
	]);
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
	function UpdateDefi(
		id,
		nom,
		description,
		objectif,
		lienVideo
	) {
		const newDefis = defis.map((defi) =>
			defi.id === id
				? { id, nom, description, objectif, lienVideo }
				: defi
		);
		setDefis(newDefis);
	}
	function deleteDefi(id) {
		setDefis(defis.filter((index) => index.id !== id));
	}
	return (
		<div className="App">
			<>
				<Heading />
				<h2> Ajouter un defi</h2>
				<DefiForm addDefi={addDefi} />
				<hr></hr>
				<h2> Liste des defis </h2>
				<DefiList
					defis={defis}
					UpdateDefi={UpdateDefi}
					deleteDefi={deleteDefi}
				/>
			</>
			)
		</div>
	);
}
