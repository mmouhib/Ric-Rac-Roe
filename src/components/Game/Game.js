import './Game.css';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import Board from '../Board/Board';
import Reset from '../Reset/Reset';
import Fullscreen from '../Fullscreen/Fullscreen';

const Game = () => {
	return (
		<div className="Game">
			<div className="title">
				<h1>Tic Tac Toe</h1>
			</div>
			<ToggleTheme className="toggletheme" />
			<Fullscreen />

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
