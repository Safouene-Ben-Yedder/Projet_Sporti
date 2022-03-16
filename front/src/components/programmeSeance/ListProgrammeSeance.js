import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
export const ListProgrammeSeance = () => {
	return (
		<ListGroup>
			<ListGroupItem className="d-flex justify-content-between align-items-center">
				User one
				<div className="ml-auto">
					<Link className="btn btn-warning mr-1" to="/edit/1">
						Edit
					</Link>
					<Button color="danger">Delete</Button>
				</div>
			</ListGroupItem>
			<ListGroupItem className="d-flex justify-content-between align-items-center">
				User Two
				<div className="ml-auto">
					<Link className="btn btn-warning mr-4" to="/edit/1">
						Edit
					</Link>
					<Button color="danger">Delete</Button>
				</div>
			</ListGroupItem>
			<ListGroupItem className="d-flex justify-content-between align-items-center">
				User Three
				<div className="ml-auto">
					<Link className="btn btn-warning mr-1" to="/edit/1">
						Edit
					</Link>
					<Button color="danger">Delete</Button>
				</div>
			</ListGroupItem>
		</ListGroup>
	);
};
