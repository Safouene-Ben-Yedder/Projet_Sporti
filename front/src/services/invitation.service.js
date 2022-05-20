import Axios from "axios";
const token = localStorage.getItem("token");
export const invite = async (nom, prenom, email, tel) => {
	// await delay(500)
	const result = await Axios.post(
		`http://localhost:5000/api/invitation/${token}`,
		nom,
		prenom,
		email,
		tel
	);

	return result.data;
};
