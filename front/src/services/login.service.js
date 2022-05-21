import axios from "axios";

const API_URL = 'http://localhost:5000/api/coach/liste';

const token = localStorage.getItem("token");

export const login = async (email, password) => {
	const input = {
		email,
		password,
	};
	const { data } = await axios.post(
		"http://localhost:5000/api/coach/login/",
		input
	);
	return data;
};

export const register = async (email, password, nom, prenom, dateNaissance) => {
	const input = {
		email,
		password,
		nom,
		prenom,
		dateNaissance,
	};
	const { data } = await axios.post(
		"http://localhost:5000/api/coach/register/",
		input
	);
	return data;

};

export const listPlayers = async () => {
	const result = await axios.get(`${API_URL}/${token}`);
	console.log("fetched data = ", result);
	return result.data;
};
