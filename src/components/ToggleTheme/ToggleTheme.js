import './ToggleTheme.css';
import dark from '../../img/dark.png';
import light from '../../img/light.png';

// nfn
const clickHandler = (e) => {
	if (e.target.src === dark) {
		e.target.src = light;
		e.target.alt = 'light mode';
		return;
	}
	e.target.src = dark;
	e.target.alt = 'dark mode';
};

const ToggleTheme = () => {
	return (
		<div className="ToggleTheme">
			<img
				src={dark}
				alt="dark mode"
				onClick={(e) => {
					clickHandler(e);
				}}
			/>
		</div>
	);
};

export default ToggleTheme;
