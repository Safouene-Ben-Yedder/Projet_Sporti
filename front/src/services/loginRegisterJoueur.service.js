import axios from "axios";

const API_URL = "http://localhost:5000/api/joueur/";

export const register = (
	nom,
	prenom,
	dateNaissance,
	email,
	password,
	ville,
	telephone,
	token
) =>
	axios
		.post(`${API_URL}register/${token}`, {
			nom,
			prenom,
			dateNaissance,
			email,
			password,
			ville,
			telephone,
		})
		.then((response) => {
			if (typeof response.data.data !== "undefined") {
				localStorage.setItem("user", response.data.data.token);
			}
			console.log("token: ", token);
			return response.data;
		});

export const login = (email, password) =>
	axios
		.post(`${API_URL}login`, {
			email,
			password,
		})
		.then((response) => {
			if (typeof response.data.data !== "undefined") {
				localStorage.setItem("user", response.data.data.token);
			}
			return response.data;
		});

export const logout = () => {
	localStorage.removeItem("user");
};

export const getCurrentUser = async () => {
	const token = localStorage.getItem("user");
	const result = await axios.get(`${API_URL}profile/${token}`);
	return result.data;
};
