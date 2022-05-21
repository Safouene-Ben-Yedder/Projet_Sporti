import Axios from "axios";
const token = localStorage.getItem("token");
const API_URL = "http://localhost:5000/api/competence/";
export const fetchCompetence = async () => {
	// await delay(500)
	const result = await Axios.get(`${API_URL}findAll/${token}`);

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
		API_URL + token,
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
	const result = await Axios.put(`${API_URL}update/${token}/${id}`, competence);

	return result.data;
};

export const DelCompetence = async (id) => {
	// await delay(500)
	const result = await Axios.delete(`${API_URL}delete/${token}/${id}`);
	return result.data;
};
