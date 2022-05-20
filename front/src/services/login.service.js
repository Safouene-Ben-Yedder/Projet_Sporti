import axios from "axios";
const token = localStorage.getItem("token");
const API_URL = "http://localhost:5000/api/abonnement/";

export const login = async (email, password) => {
	const input = {
		email,
		password,
	};
	const { data } = await axios.post(
		"http://localhost:5000/api/coach/login/:token",
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
export const updateAbonnement = async (abonnement) => {
	const result = await axios.put(`${API_URL}coach/${token}`, {
		abonnement,
	});
	return result.data;
};
