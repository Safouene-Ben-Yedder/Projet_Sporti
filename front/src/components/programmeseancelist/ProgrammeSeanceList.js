import ProgrammeSeance from "../programmeseance/ProgrammeSeance";

function ProgrammeSeanceList(props) {
	return (
		<div>
			{props.programmesSeance.map(function (x) {
				return (
					<ProgrammeSeance
						key={x.id}
						id={x.id}
						titre={x.titre}
						description={x.description}
						technique={x.technique}
						image={x.image}
						lienVideo={x.lienVideo}
						UpdateProgSeance={props.UpdateProgSeance}
						deleteProgSeance={props.deleteProgSeance}
					/>
				);
			})}
		</div>
	);
}

export default ProgrammeSeanceList;
