import exitFullscreenLight from '../../img/Fullscreen/exitFullscreenLight.png';
import FullscreenLight from '../../img/Fullscreen/fullscreenLight.png';
// import exitFullscreenDark from '../img/Fullscreen/exitFullscreenDark.png';
// import FullscreenDark from '../img/Fullscreen/fullscreenDark.png';

const handleClick = (e) => {
	if (e.target.src === FullscreenLight) {
		e.target.src = exitFullscreenLight;
		return;
	}
	e.target.src = FullscreenLight;
};

const Fullscreen = (props) => (
	<div className="Fullscreen">
		<img
			src={FullscreenLight}
			alt="FullscreenDark"
			onClick={(e) => {
				handleClick(e);
			}}
		/>
	</div>
);

export default Fullscreen;
