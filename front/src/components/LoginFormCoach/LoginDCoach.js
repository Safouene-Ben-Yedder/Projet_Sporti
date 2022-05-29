import { useState, useEffect } from "react";
import { Form, FormGroup, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import StatForm from "../statform/statform";
import StatList from "../statlist/statlist";
import ProgrammeSeanceForm from "../programmeseanceform/ProgrammeSeanceForm";
import ProgrammeSeanceList from "../programmeseancelist/ProgrammeSeanceList";
import { postProg } from "../../services/progSeance.service";
import { fetchDiscipline, updateLogin } from "../../services/login.service";

export default function LoginDCoach() {
	const [isSubmit, setIsSubmit] = useState(false);
	const [Stat, setStat] = useState([]);
	const [programmesSeance, setProgrammesSeance] = useState([]);
	const [Discipline, setDiscipline] = useState([]);
	const [selectedDiscipline, setSelectedDiscipline] = useState("tennis");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmit(true);
		await updateLogin("62870bfdf66fc3b0e3bbd4f8", true);
	};
	useEffect(() => {
		fetchDiscipline()
			.then((res) => {
				setDiscipline(res);
				setSelectedDiscipline(res[0]._id);
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	console.log(selectedDiscipline);
	console.log(Discipline);
	function addStat(Titre, description, lienVideo, Visible, timer, maxmin) {
		setStat([
			...Stat,
			{
				id: Stat.length + 1,
				Titre: Titre,
				description: description,
				lienVideo: lienVideo,
				Visible: Visible,
				timer: timer,
				maxmin: maxmin,
			},
		]);
	}
	const addProgSeance = async (
		titre,
		description,
		technique,
		image,
		lienVideo
	) => {
		const newProg = await postProg({
			titre,
			description,
			image,
			lienVideo,
			technique,
		});
		setProgrammesSeance((Prog) => [...Prog, { ...newProg }]);
	};

	return (
		<>
			<Form className="form" onSubmit={handleSubmit}>
				<FormGroup>
					<Label> Discipline </Label>
					<select
						value={selectedDiscipline}
						onChange={(e) => setSelectedDiscipline(e.target.value)}>
						{Discipline.map((dis) => (
							<option label={dis.type} value={dis._id}>
								{dis.type}
							</option>
						))}
					</select>
				</FormGroup>
				<Button type="submit">Discipline choisie!</Button>
			</Form>
			{isSubmit && (
				<>
					<h2>Créer statistique </h2>
					<StatForm addStat={addStat} />
					<StatList Stat={Stat} />
					<h2>Créer Plan de la séance </h2>
					<ProgrammeSeanceForm addProgSeance={addProgSeance} />
					<ProgrammeSeanceList programmesSeance={programmesSeance} />
					<Link className="link" to="/modifier">
						Go to profile
					</Link>
				</>
			)}
		</>
	);
}
