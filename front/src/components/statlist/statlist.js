import Stat from "../stat/stat";

function StatList(props) {
	return (
		<div>
			{props.Stat.map(function (x) {
				return (
					<Stat
						id={x._id}
						Titre={x.Titre}
						description={x.description}
						timer={x.timer}
						lien={x.lien}
						Visible={x.Visible}
						maxmin={x.maxmin}
						UpdateStat={props.UpdateStat}
						deleteStat={props.deleteStat}
					/>
				);
			})}
		</div>
	);
}

export default StatList;
