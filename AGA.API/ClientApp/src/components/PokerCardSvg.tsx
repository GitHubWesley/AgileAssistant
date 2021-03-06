import Box from '@mui/material/Box';

import Poker_1 from '../images/1.svg';
import Poker_2 from '../images/2.svg';
import Poker_3 from '../images/3.svg';
import Poker_5 from '../images/5.svg';
import Poker_8 from '../images/8.svg';
import Poker_13 from '../images/13.svg';
import Poker_20 from '../images/20.svg';
import Poker_40 from '../images/40.svg';
import Poker_100 from '../images/100.svg';
import Poker_Cover from '../images/cover.svg';
import Poker_Coffee from '../images/coffee.svg';
import Poker_Infinite from '../images/infinite.svg';
import Poker_Brownie from '../images/brownie.svg';
import Poker_Dragons from '../images/dragons.svg';
import Poker_YakShaving from '../images/yak_shaving.svg';
import IPoker from '../api/IPoker';

enum PredefinedPokerKeys {
	One = '1',
	Two = '2',
	Three = '3',
	Five = '5',
	Eight = '8',
	Thirteen = '13',
	Twenty = '20',
	Fourty = '40',
	OneHundred = '100',
	Coffee = 'coffee',
	Infinite = 'infinite',
	Brownie = 'brownie',
	Dragons = 'dragons',
	YakShaving = 'yak_shaving',
}

function getPokerImage(key: string | undefined | null) {
	switch (key) {
		case PredefinedPokerKeys.One:
			return Poker_1;
		case PredefinedPokerKeys.Two:
			return Poker_2;
		case PredefinedPokerKeys.Three:
			return Poker_3;
		case PredefinedPokerKeys.Five:
			return Poker_5;
		case PredefinedPokerKeys.Eight:
			return Poker_8;
		case PredefinedPokerKeys.Thirteen:
			return Poker_13;
		case PredefinedPokerKeys.Twenty:
			return Poker_20;
		case PredefinedPokerKeys.Fourty:
			return Poker_40;
		case PredefinedPokerKeys.OneHundred:
			return Poker_100;
		case PredefinedPokerKeys.Coffee:
			return Poker_Coffee;
		case PredefinedPokerKeys.Infinite:
			return Poker_Infinite;
		case PredefinedPokerKeys.Brownie:
			return Poker_Brownie;
		case PredefinedPokerKeys.Dragons:
			return Poker_Dragons;
		case PredefinedPokerKeys.YakShaving:
			return Poker_YakShaving;
		default:
			return Poker_Cover;
	}
}

interface IPokerCard {
	poker: IPoker | undefined;
	isShown: boolean;
	size?: number;
	onClick?: (event: any) => void;
}

const pokerStyle = {
	size: 10,
	get width() {
		return this.size * 16 + 'px';
	},
	get height() {
		return this.size * 24 + 'px';
	},
	get fontSizeCenter() {
		return this.size * 6 + 'px';
	},
};

export default function PokerCardSvg(props: IPokerCard) {
	pokerStyle.size = props.size ?? pokerStyle.size;

	return (
		<Box
			sx={{
				width: pokerStyle.width,
				height: pokerStyle.height,
				transition: 'transform 0.5s ease-in-out,width 0.3s, height 0.3s',
				transform: () => (props.isShown ? 'rotateY(180deg) scaleX(-1)' : ''),
				backgroundSize: 'cover',
				backgroundImage: () => (props.isShown ? `url(${getPokerImage(props.poker?.value)})` : `url(${Poker_Cover})`),
			}}
			onClick={props.onClick}
		></Box>
	);
}
