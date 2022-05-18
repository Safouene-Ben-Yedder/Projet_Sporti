import Axios from "axios";

export const register = async (nom, prenom, email, password, dateNaissance) => {
	const result = await Axios.post(
		"http://localhost:5000/api/coach/register",
		nom,
		prenom,
		email,
		password,
		dateNaissance
	);
	return result.data.model;
};
