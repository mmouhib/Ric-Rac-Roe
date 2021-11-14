import './Board.css';
import Cell from '../Cell/Cell';

function Board() {
	return (
		<div className="board">
			<table>
				<Cell />
				<Cell />
				<Cell />
			</table>
		</div>
	);
}

export default Board;
