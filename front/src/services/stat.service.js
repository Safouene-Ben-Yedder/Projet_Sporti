import Axios from "axios";
const token = localStorage.getItem("token");
const API_URL = "http://localhost:5000/api/stat/";

export const fetchStat = async () => {
	// await delay(500)
	const result = await Axios.get(`${API_URL}findAll/${token}`);

	return result.data;
};

export const addStat = async (
	Titre,
	description,
	timer,
	lien,
	Visible,
	maxmin
) => {
	// await delay(500)
	const result = await Axios.post(
		API_URL + token,
		Titre,
		description,
		timer,
		lien,
		Visible,
		maxmin
	);

	return result.data;
};

export const UpStat = async (id, stat) => {
	// await delay(500)
	const result = await Axios.put(`${API_URL}update/${token}/${id}`, stat);

	return result.data;
};

export const Delstat = async (id) => {
	// await delay(500)
	const result = await Axios.delete(`${API_URL}delete/${token}/${id}`);

	return result.data;
};
