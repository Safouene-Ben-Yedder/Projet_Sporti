import Axios from "axios";
export const fetchCompetence = async () => {
	// await delay(500)
	const result = await Axios.get("http://localhost:5000/api/competence/");

	return result.data;
};

export const addCompetence = async (
	nom,
	description,
	lien,
	visible,
	rating
) => {
	// await delay(500)
	const result = await Axios.post(
		"http://localhost:5000/api/competence/",
		nom,
		description,
		lien,
		visible,
		rating
	);

	return result.data;
};

export const UpCompetence = async (id, competence) => {
	// await delay(500)
	const result = await Axios.put(
		"http://localhost:5000/api/competence/" + id,
		competence
	);

	return result.data;
};

export const DelCompetence = async (id) => {
	// await delay(500)
	const result = await Axios.delete(
		"http://localhost:5000/api/competence/" + id
	);

	return result.data;
};
