import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import { Link } from "react-router-dom";
import StatForm from "../statform/statform";
import StatList from "../statlist/statlist";
import ProgrammeSeanceForm from "../programmeseanceform/ProgrammeSeanceForm";
import ProgrammeSeanceList from "../programmeseancelist/ProgrammeSeanceList";

export default function LoginDCoach(props) {
	const [Discipline, setDiscipline] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [Stat, setStat] = useState([]);
    const [programmesSeance, setProgrammesSeance] = useState([]);
    const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmit(true);
	};
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
    function UpdateStat(
		id,
		Titre,
		description,
		lienVideo,
		Visible,
		timer,
		maxmin
	) {
		const newStat = Stat.map((Stat) =>
			Stat.id === id
				? { id, Titre, description, lienVideo, Visible, timer, maxmin }
				: Stat
		);
		setStat(newStat);
	}
	function deleteStat(id) {
		setStat(Stat.filter((index) => index.id !== id));
	}
    function addProgSeance(titre, description, technique, image, lienVideo) {
		setProgrammesSeance([
			...programmesSeance,
			{
				id: programmesSeance.length + 1,
				titre: titre,
				description: description,
				technique: technique,
				image: image,
				lienVideo: lienVideo,
			},
		]);
	}
	function UpdateProgSeance(
		id,
		titre,
		description,
		technique,
		image,
		lienVideo
	) {
		const newProgrammesSeance = programmesSeance.map((programmeSeance) =>
			programmeSeance.id === id
				? { id, titre, description, technique, image, lienVideo }
				: programmeSeance
		);
		setProgrammesSeance(newProgrammesSeance);
	}
	function deleteProgSeance(id) {
		setProgrammesSeance(programmesSeance.filter((index) => index.id !== id));
	}
	return (
		<>
			<Form className="form" onSubmit={handleSubmit}>
				<FormGroup>
					<Label> Discipline </Label>
					<select
						value={Discipline}
						onChange={(e) => setDiscipline(e.target.value)}>
						<option value="d1">tennis</option>
						<option value="d2">foot</option>
                        <option value="d3">préparateur physique tennis</option>
                        <option value="d4">coach personnel</option>
					</select>
				</FormGroup>
                <Button type="submit">Discipline choisie!</Button>
			</Form>
            {isSubmit && (
                <>
                    <h2>Créer statistique </h2>
                    <StatForm addStat={addStat}/>
                    <StatList Stat={Stat} UpdateStat={UpdateStat} deleteStat={deleteStat}/>
                    <h2>Créer Plan de la séance </h2>
                    <ProgrammeSeanceForm addProgSeance={addProgSeance}/> 
                    <ProgrammeSeanceList
					programmesSeance={programmesSeance}
					UpdateProgSeance={UpdateProgSeance}
					deleteProgSeance={deleteProgSeance}/>
                </>
			)}
		</>
	);
}
