import Competence from "../competence/competence";
function CompetenceList(props) {
	return (
		<div>
			{props.Competence.map(function (x) {
				return (
					<Competence
						key={x.id}
						id={x.id}
						nom={x.nom}
						description={x.description}
						visvible={x.visvible}
						lienVideo={x.lienVideo}
						UpdateCompetence={props.UpdateCompetence}
						deleteCompetence={props.deleteCompetence}
					/>
				);
			})}
		</div>
	);
}

export default CompetenceList;
