import { Card, CardContent, Typography, Divider } from '@mui/material';
import IParticipant from '../api/IParticipant';
import IPoker from '../api/IPoker';
import PokerCard from './PokerCard';

interface IParticipantCard extends IParticipant {}

export default function ParticipantCard(props: IParticipantCard) {
	let poker: IPoker | undefined;
	if (props.selectedPoker) {
		poker = { id: props.selectedPoker.pokerId, value: props.selectedPoker.pokerValue };
	}
	return (
		<Card elevation={3}>
			{<PokerCard poker={poker} isShown={props.isPokerShown} deckId={props.deckId} />}
			<Divider />
			<CardContent
				sx={{
					'&:last-child': {
						paddingBottom: '16px',
					},
				}}
			>
				<Typography align="center">{props.name}</Typography>
			</CardContent>
		</Card>
	);
}
