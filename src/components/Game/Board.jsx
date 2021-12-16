import Cell from './Cell.jsx';
import { useState } from 'react';

const Board = () => {
	const [logo, setLogo] = useState('X');

	return (
		<div className="board">
			<table>
				<tr>
					<Cell id="1" logo={logo} />
					<Cell id="2" logo={logo} />
					<Cell id="3" logo={logo} />
				</tr>
				<tr>
					<Cell id="4" logo={logo} />
					<Cell id="5" logo={logo} />
					<Cell id="6" logo={logo} />
				</tr>
				<tr>
					<Cell id="7" logo={logo} />
					<Cell id="8" logo={logo} />
					<Cell id="9" logo={logo} />
				</tr>
			</table>
		</div>
	);
};

export default Board;
