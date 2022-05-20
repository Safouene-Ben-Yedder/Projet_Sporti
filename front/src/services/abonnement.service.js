import axios from "axios";
const token = localStorage.getItem("token");
const API_URL = "http://localhost:5000/api/abonnement/";
const API_PURL = "http://localhost:5000/api/coach/profile/:token";

export const updateAbonnement = async (abonnement) => {
	const result = await axios.put(`${API_URL}coach/${token}`, {
		abonnement,
	});
	console.log("Service Abonnement", result.data);
	return result.data;
};
export const showProfile = async () => {
	const rs = await axios.get(`${API_PURL}${token}`);
	console.log("Profile", rs.data);
	return rs.data;
};
