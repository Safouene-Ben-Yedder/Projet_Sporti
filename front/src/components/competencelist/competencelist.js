import Competence from "../competence/competence";
function CompetenceList(props) {
	return (
		<div>
			{props.Competence.map(function (x) {
				return (
					<Competence
						id={x.id}
						nom={x.nom}
						description={x.description}
						visvible={x.visvible}
						lienVideo={x.lienVideo}
						rating={x.rating}
						UpdateCompetence={props.UpdateCompetence}
						deleteCompetence={props.deleteCompetence}
					/>
				);
			})}
		</div>
	);
}

export default CompetenceList;
