import React from "react";
import "./detailsSeance.css";
function DetailsSeance(props) {
	return props.trigger ? (
		<div className="popup">
			<div className="popup-inner">
				<button className="close-btn" onClick={() => props.setTrigger(false)}>
					close
				</button>
				{props.children}
			</div>
		</div>
	) : (
		""
	);
}
export default DetailsSeance;
