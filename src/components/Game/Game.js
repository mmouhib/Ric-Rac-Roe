import './Game.css';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import Board from '../Board/Board';
import Reset from '../Reset/Reset';
import Fullscreen from '../Fullscreen/Fullscreen';
import Score from '../Score/Score';

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
