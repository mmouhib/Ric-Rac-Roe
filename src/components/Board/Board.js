import './Board.css';

function Board() {
	return (
		<div className="board">
			<div className="title">
				<h1>Tic Tac Toe</h1>
			</div>

			<table>
				<tr>
					<td></td>
					<td class="vert"></td>
					<td></td>
				</tr>
				<tr>
					<td class="hori"></td>
					<td class="vert hori"></td>
					<td class="hori"></td>
				</tr>
				<tr>
					<td></td>
					<td class="vert"></td>
					<td></td>
				</tr>
			</table>

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
}

export default Board;
