import Competence from "../competence/competence";
function CompetenceList(props) {
	return (
		<div>
			{props.Competence.map(function (x) {
				return (
					<Competence
						id={x._id}
						nom={x.nom}
						description={x.description}
						visible={x.visible}
						lien={x.lien}
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
