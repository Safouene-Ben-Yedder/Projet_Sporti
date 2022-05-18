import Axios from "axios";
export const header = () => ({
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
});
export const RegisterJoueur = async (credentials) => {
	const result = await Axios.post(
		"http://localhost:5000/api/login/joueur/:token",
		credentials
	);
	return result.data.token;
};
export const loginJoueur = async (credentials) => {
	const result = await Axios.post(
		"http://localhost:5000/api/login/joueur/",
		credentials
	);
	return result.data.token;
};
// afficher tous les séances du joueur (joueur)
export const fetchAllSeancesPlayer = async () => {
	// await delay(500)
	const result = await Axios.get(
		"http://localhost:5000//api/seance/joueur/all/:token"
	);
	return result.data.model;
};
export const fetchSeanceById = async (seanceId) => {
	const result = await Axios.get(
		"http://localhost:5000/api/seance/:id/" + seanceId
	);
	return result.data.model;
};

//afficher le détail d'une séance pour joueur
export const fetchSeanceDetails = async (id) => {
	// await delay(500)
	const result = await Axios.get(
		"http://localhost:5000/api/seance/joueur/detail/:token/:id" + id
	);
	return result.data.model;
};
