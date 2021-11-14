import './Game.css';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import Board from '../Board/Board';

const Game = () => {
	return (
		<div className="Game">
			<div className="title">
				<h1>Tic Tac Toe</h1>
			</div>
			<ToggleTheme className="toggletheme" />

			<Board />
			<div className="score">
				<p id="p1">
					Player 1: <span>6</span>
				</p>
				<p>
					Player 2: <span>1</span>
				</p>
			</div>
		</div>
	);
};

export default Game;
