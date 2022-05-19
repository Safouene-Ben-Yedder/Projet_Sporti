import ProgrammeSeance from "../programmeseance/ProgrammeSeance";

function ProgrammeSeanceList(props) {
	return (
		<div>
			{props.programmesSeance.map(function (x) {
				return (
					<ProgrammeSeance
						id={x._id}
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
