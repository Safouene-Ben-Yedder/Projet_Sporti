import { useParams } from "react-router-dom";
import HeadingRegisterJoueur from "../../components/heading/HeadingRegisterJoueur";
import JwtDecode from "jwt-decode";
import RegisterJoueur from "../../components/registerJoueur/RegisterJoueur";

export default function RegisterJoueurPage() {
	const token = useParams();
	const player = JwtDecode(token.token);

	return (
		<div className="App">
			<>
				<HeadingRegisterJoueur />
				<RegisterJoueur player={player} />
			</>
		</div>
	);
}
