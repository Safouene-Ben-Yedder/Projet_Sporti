import Axios from "axios";
export const fetchCompetence = async () => {
	// await delay(500)
	const result = await Axios.get("http://localhost:5000/api/competence/");

	return result.data;
};
