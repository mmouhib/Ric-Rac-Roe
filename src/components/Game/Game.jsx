import ToggleTheme from '../UI/ToggleTheme.jsx';
import Board from './Board.jsx';
import Reset from './Reset.jsx';
import Fullscreen from '../UI/Fullscreen.jsx';
import Score from './Score.jsx';

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
