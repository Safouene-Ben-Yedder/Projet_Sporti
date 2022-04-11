import Defi from "../defi/Defi";

function DefiList(props) {
	return (
		<div>
			{props.defis.map(function (x) {
				return (
					<Defi
						id={x.id}
						nom={x.nom}
						description={x.description}
						objectif={x.objectif}
						lienVideo={x.lienVideo}
						UpdateDefi={props.UpdateDefi}
						deleteDefi={props.deleteDefi}
						assigner={props.assigner}
					/>
				);
			})}
		</div>
	);
}

export default DefiList;