import React from 'react';
import './Fullscreen.css';
import exitFullscreenDark from '../../img/Fullscreen/exitFullscreenDark.png';
import exitFullscreenLight from '../../img/Fullscreen/exitFullscreenLight.png';
import FullscreenDark from '../../img/Fullscreen/fullscreenDark.png';
import FullscreenLight from '../../img/Fullscreen/fullscreenLight.png';

const handleClick = (e) => {
	if (e.target.src === FullscreenDark) {
		e.target.src = FullscreenLight;
		return;
	}
	e.target.src = exitFullscreenLight;
};

const Fullscreen = () => (
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
