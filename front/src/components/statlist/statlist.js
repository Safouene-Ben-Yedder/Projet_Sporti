import Stat from "../stat/stat";

function StatList(props) {
	return (
		<div>
			{props.Stat.map(function (x) {
				return (
					<Stat
						id={x.id}
						Titre={x.Titre}
						description={x.description}
						Visible={x.Visible}
						lienVideo={x.lienVideo}
						timer={x.timer}
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
