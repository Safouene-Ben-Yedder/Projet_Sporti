import Axios from "axios";
export const fetchStat = async () => {
	// await delay(500)
	const result = await Axios.get("http://localhost:5000/api/stat/");

	return result.data;
};

export const addStat = async (
	Titre,
	description,
	timer,
	lien,
	Visible,
	maxmin
) => {
	// await delay(500)
	const result = await Axios.post(
		"http://localhost:5000/api/stat/",
		Titre,
		description,
		timer,
		lien,
		Visible,
		maxmin
	);

	return result.data;
};

export const UpStat = async (id, stat) => {
	// await delay(500)
	const result = await Axios.put("http://localhost:5000/api/stat/" + id, stat);

	return result.data;
};

export const Delstat = async (id) => {
	// await delay(500)
	const result = await Axios.delete("http://localhost:5000/api/stat/" + id);

	return result.data;
};
