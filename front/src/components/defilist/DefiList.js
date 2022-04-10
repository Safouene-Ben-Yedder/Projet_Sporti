import Defi from "../defi/Defi";

function DefiList(props) {
	return (
		<div>
			{props.defis.map(function (x) {
				return (
					<Defi
						key={x.id}
						id={x.id}
						nom={x.nom}
						description={x.description}
						objectif={x.objectif}
						publique={x.lienVideo}
						UpdateDefi={props.UpdateDefi}
						deleteDefi={props.deleteDefi}
					/>
				);
			})}
		</div>
	);
}

export default DefiList;
