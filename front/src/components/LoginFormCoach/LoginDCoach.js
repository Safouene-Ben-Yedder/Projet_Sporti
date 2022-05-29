import { useState, useEffect} from "react";
import { Form, FormGroup, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import StatForm from "../statform/statform";
import StatList from "../statlist/statlist";
import ProgrammeSeanceForm from "../programmeseanceform/ProgrammeSeanceForm";
import ProgrammeSeanceList from "../programmeseancelist/ProgrammeSeanceList";
import {
	postProg,
} from "../../services/progSeance.service";
import { addStat as newStat } from "../../services/stat.service";
import {fetchDiscipline,updateLogin} from "../../services/login.service"

import JwtDecode from "jwt-decode";

export default function LoginDCoach() {
	
    const [isSubmit, setIsSubmit] = useState(false);
    const [Stat, setStat] = useState([]);
    const [programmesSeance, setProgrammesSeance] = useState([]);
	const [Discipline, setDiscipline] = useState([]);
	const [selectedDiscipline, setSelectedDiscipline] = useState("tennis");
    const handleSubmit = async(e) => {
		e.preventDefault();
		setIsSubmit(true);
		var decoded = JwtDecode(localStorage.getItem('token'));
		console.log(decoded.user_id)
		await updateLogin(decoded.user_id,false);

	};
	useEffect(()=>{
		fetchDiscipline().then((res)=>{
			setDiscipline(res)
			setSelectedDiscipline(res[0]._id)
			console.log(res);
		}).catch((err)=>{
			console.log(err)
		})
	},[])
	console.log(selectedDiscipline)
	console.log(Discipline)

	const addStat = async (Titre, description, timer, lien, Visible, maxmin) => {
		try {
			const result = await newStat({
				Titre,
				description,
				timer,
				lien,
				Visible,
				maxmin,
			});

			setStat([
				...Stat,
				{
					...result,
				},
			]);
		} catch (e) {
			console.log("error",e)
;		}
	};
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
							{
								Discipline.map(dis => <option label={dis.type} value={dis._id}>{dis.type}</option>)
							}
						
					</select>
				</FormGroup>
                <Button type="submit">Discipline choisie!</Button>
			</Form>
            {isSubmit && (
                <>
                    <h2>Créer statistique </h2>
                    <StatForm addStat={addStat}/>
                    <StatList Stat={Stat} />
                    <h2>Créer Plan de la séance </h2>
                    <ProgrammeSeanceForm addProgSeance={addProgSeance}/> 
                    <ProgrammeSeanceList
					programmesSeance={programmesSeance}
					/>
					<Link className="link" to="/modifier">
						Go to profile
					</Link>
                </>
			)}
		</>
	);
}
