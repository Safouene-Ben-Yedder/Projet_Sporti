import React from "react";

import { Link } from "react-router-dom";
import EventDetails from "../../components/eventdetails/EventDetails";

const EventdetailsPage = () => {
	return (
		<>
			<h2>Details evenement</h2>
			<EventDetails />
		</>
	);
};
export default EventdetailsPage;
