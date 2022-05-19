import axios from 'axios';

const API_URL = 'http://localhost:5000/api/lieu/';

const token = localStorage.getItem("token");

export const fetchLieu = async () => {
	const result = await axios.get(`${API_URL}findAll/${token}`);
	console.log("fetched data = ", result);
	return result.data;
};

export const postLieu = async (Lieu) => {
	console.log("added data= ", Lieu);
	const result = await axios.post(API_URL + token, Lieu);
	console.log("added result = ", result);
	return result.data;
};

export const updateLieu = async (id, nom, ville, pays, adresse) => {
	const result = await axios.put(`${API_URL}update/${token}/${id}`, {
		nom,
		ville,
		pays,
		adresse,
	});
	return result.data;
};

export const deleteLieu = async (id) => {
	const result = await axios.delete(`${API_URL}delete/${token}/${id}`);
	return result.data;
};
