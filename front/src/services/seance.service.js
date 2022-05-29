import axios from "axios";

const API_URL = "http://localhost:5000/api/seance/";

const token = localStorage.getItem("token");

export const fetchSeance = async () => {
	const result = await axios.get(`${API_URL}all/${token}`);
	console.log("fetched data = ", result);
	return result.data;
};

export const postSeance = async (Seance) => {
	console.log("added data= ", Seance);
	const result = await axios.post(API_URL + token, Seance);
	console.log("added result = ", result);
	return result.data;
};

export const updateSeance = async (
	id,
	titre,
	description,
	date,
	joueur,
	objectif,
	lieuentrainements,
	programmeSeances,
	competences,
	stats
) => {
	

	const result = await axios.put(`${API_URL}update/${token}/${id}`, {
		titre,
		description,
		date,
		joueur,
		objectif,
		lieuentrainements,
		programmeSeances,
		competences,
		stats,
	});

	console.log(result.data);
	console.log("dddd");
	return result.data;
};

export const deleteSeance = async (id) => {
	const result = await axios.delete(`${API_URL}delete/${token}/${id}`);
	return result.data;
};
