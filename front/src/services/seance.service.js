import axios from 'axios';

const API_URL = 'http://localhost:5000/api/seance/';

const token = localStorage.getItem("token");

export const annulerSeance = async (id,annuler) => {
	const result = await axios.put(`${API_URL}annuler/${token}/${id}`, {
		annuler
	});
	return result.data;
};