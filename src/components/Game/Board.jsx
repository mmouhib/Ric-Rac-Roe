import {useState} from "react";

const Cell = (props) => {
	return <div className='cell'>{props.value}</div>;
};

const Board = () => {
	const [board, setBoard] = useState(['1','2','3','4','5','6','7','8','9']);

	return (
		<div className='board'>
			{board.map((index) => {
				return <Cell value = {index}/>
			})}

		</div>
	);
};

export default Board;
