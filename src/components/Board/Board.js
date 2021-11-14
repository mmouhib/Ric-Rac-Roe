import './Board.css';
import Cell from '../Cell/Cell';

const Board = () => {
	return (
		<div className="board">
			<table>
				<Cell />
				<Cell />
				<Cell />
			</table>
		</div>
	);
};

export default Board;
