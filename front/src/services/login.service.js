import axios from "axios";

const API_URL = 'http://localhost:5000/api/coach/liste';
const API = 'http://localhost:5000/api/coach/joueur';
const API_D = 'http://localhost:5000/api/discipline';
const API_L = 'http://localhost:5000/api/coach/update';

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

export const readPlayer = async (id) => {
	const result = await axios.get(`${API}/${token}/${id}`);
	console.log("fetched data = ", result);
	return result.data;
};

export const fetchDiscipline = async () => {
	const result = await axios.get(`${API_D}/`);
	console.log("fetched data = ", result);
	return result.data;
};

export const updateLogin = async (id,firstLogin) => {
	const result = await axios.put(`${API_L}/${id}`,{firstLogin});
	console.log("data updated= ", result);
	return result.data;
};
