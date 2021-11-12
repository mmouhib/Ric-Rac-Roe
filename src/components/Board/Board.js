import './Board.css';

function handleHover() {
	if (!(this.innerHTML === '')) {
		this.classList.add('');
	}
}

function Board() {
	return (
		<div className="board">
			<table>
				<tr>
					<td></td>
					<td class="vert">x</td>
					<td></td>
				</tr>
				<tr>
					<td class="hori">x</td>
					<td class="vert hori"></td>
					<td class="hori"></td>
				</tr>
				<tr>
					<td></td>
					<td class="vert"></td>
					<td></td>
				</tr>
			</table>
		</div>
	);
}

export default Board;
