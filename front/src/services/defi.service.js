import axios from "axios";

const API_URL = "http://localhost:5000/api/defi/";

const token = localStorage.getItem("token");

export const fetchDefi = async () => {
	const result = await axios.get(`${API_URL}findAll/${token}`);
	// console.log("fetched data = ", result);
	return result.data;
};

export const postDefi = async (Defi) => {
	//	console.log("added data= ", Defi);
	const result = await axios.post(API_URL + token, Defi);
	//	console.log("added result = ", result);
	return result.data;
};

export const updateDefi = async (
	id,
	nom,
	description,
	lienVideo,
	objectif
	// 	date
	//	joueurs
) => {
	const result = await axios.put(`${API_URL}update/${token}/${id}`, {
		nom,
		description,
		lienVideo,
		objectif,
		// date,
		//		joueurs,
	});
	return result.data;
};

export const assignerDefi = async (id,date,joueurs) => {
	const result = await axios.put(`${API_URL}update/${token}/${id}`, {
		date,
		joueurs,
	});
	return result.data;
};


export const deleteDefi = async (id) => {
	const result = await axios.delete(`${API_URL}delete/${token}/${id}`);
	return result.data;
};
