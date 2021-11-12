import './Board.css';

function Board() {
	return (
		<div className="board">
			<table>
				<tr>
					<td>x</td>
					<td class="vert">x</td>
					<td>x</td>
				</tr>
				<tr>
					<td class="hori">x</td>
					<td class="vert hori">x</td>
					<td class="hori">x</td>
				</tr>
				<tr>
					<td>x</td>
					<td class="vert">x</td>
					<td>x</td>
				</tr>
			</table>
		</div>
	);
}

export default Board;
