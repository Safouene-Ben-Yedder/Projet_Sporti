import Lieu from "../lieu/Lieu.js";

function LieuList(props) {
	return (
		<div>
			{props.Lieu.map(function (x) {
				return (
					<Lieu
						id={x._id}
						nom={x.nom}
						ville={x.ville}
						pays={x.pays}
						adresse={x.adresse}
						UpdateLieu={props.UpdateLieu}
						deleteLieu={props.deleteLieu}
					/>
				);
			})}
		</div>
	);
}

export default LieuList;
