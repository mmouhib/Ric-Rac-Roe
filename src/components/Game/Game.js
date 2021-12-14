import ToggleTheme from '../UI/ToggleTheme';
import Board from './Board';
import Reset from './Reset';
import Fullscreen from '../UI/Fullscreen';
import Score from './Score';

const Game = () => {
	return (
		<div className="Game">
			<ToggleTheme />
			<Fullscreen />
			<h1 className="title">Tic Tac Toe</h1>
			<Board />
			<Reset onClick="{clickHandler}" />
			<Score />
		</div>
	);
};

export default Game;
