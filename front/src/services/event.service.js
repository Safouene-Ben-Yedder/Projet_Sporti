import axios from "axios";

const API_URL = "http://localhost:5000/api/event/";

const token = localStorage.getItem("token");

export const fetchEvent = async () => {
	const result = await axios.get(`${API_URL}findAll/${token}`);
	console.log("fetched data = ", result);
	return result.data;
};

export const postEvent = async (Event) => {
	console.log("added data= ", Event);
	const result = await axios.post(API_URL + token, Event);
	console.log("added result = ", result);
	return result.data;
};

export const updateEvent = async (id, nom, description, date, publique) => {
	const result = await axios.put(`${API_URL}update/${token}/${id}`, {
		nom,
		description,
		date,
		publique,
	});
	return result.data;
};

export const deleteEvent = async (id) => {
	const result = await axios.delete(`${API_URL}delete/${token}/${id}`);
	return result.data;
};
