import axios from "axios";

const API_URL = "http://localhost:5000/api/coach/programme/";

const token = localStorage.getItem("token");

export const fetchProg = async () => {
	const result = await axios.get(`${API_URL}findAll/${token}`);
	console.log("fetched data = ", result);
	return result.data;
};

export const postProg = async (Prog) => {
	console.log("added data= ", Prog);
	const result = await axios.post(API_URL + token, Prog);
	console.log("added result = ", result);
	return result.data;
};

export const updateProg = async (id, title, description, src, video,technique) => {
	const result = await axios.put(`${API_URL}update/${token}/${id}`, {
		title,
		description,
		src,
		video,
		technique,
	});
	return result.data;
};

export const deleteProg = async (id) => {
	const result = await axios.delete(`${API_URL}delete/${token}/${id}`);
	return result.data;
};


