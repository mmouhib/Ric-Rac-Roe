import { useState } from 'react';

const Cell = (props) => {
	const [value, setValue] = useState('');
	const [logo, setLogo] = useState(props.logo);
	return (
		<td
			onClick={() => {
				setValue('X');
				if (props.logo === 'X') {
					setLogo('O');
				} else {
					setLogo('X');
				}
			}}
		>
			{value}
		</td>
	);
};

export default Cell;
