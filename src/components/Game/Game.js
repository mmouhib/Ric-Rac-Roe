import './Game.css';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import Board from '../Board/Board';
import Reset from '../Reset/Reset';
import Fullscreen from '../Fullscreen/Fullscreen';

const Game = () => {
	return (
		<div className="Game">
			<ToggleTheme />
			<Fullscreen />
			<h1 className="title">Tic Tac Toe</h1>
			<Board />
			<Reset onClick="{clickHandler}" />
			<div className="score">
				<p id="p1">
					Player 1: <span>0</span>
				</p>
				<p>
					Player 2: <span>0</span>
				</p>
			</div>
		</div>
	);
};

export default Game;
