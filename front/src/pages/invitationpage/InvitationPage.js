import { HeaderInvite } from "../../components/heading/HeaderInvite";
import InvitationForm from "../../components/invitationform/invitationform";
import { invite as addinvite } from "../../services/invitation.service";
import { useCallback, useState } from "react";

export default function InvitationPage() {
	const [Invite, setInvite] = useState([]);
	const [error, setError] = useState();
	console.log(error);

	const Invitation = async (nom, prenom, email, tel) => {
		try {
			const result = await addinvite({
				nom,
				prenom,
				email,
				tel,
			});
			console.log(result);

			setInvite([
				...Invite,
				{
					...result,
				},
			]);
		} catch (e) {
			setError("An error occurred in Invitation");
		}
	};

	const memorizedCallback = useCallback(Invitation, []);
	return (
		<div className="App">
			<>
				<HeaderInvite />
				<InvitationForm Inviter={memorizedCallback} />
			</>
		</div>
	);
}
