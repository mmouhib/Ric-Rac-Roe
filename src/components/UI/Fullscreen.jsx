import { useState } from "react";
import FullscreenLight from "../../img/Fullscreen/fullscreenLight.png";
import exitFullscreenLight from "../../img/Fullscreen/exitFullscreenLight.png";

const Fullscreen = (props) => {
  const [source, setSource] = useState(FullscreenLight);
  return (
    <div className="fullscreen">
      <img
        src={source.toString()}
        alt="FullscreenDark"
        onClick={() => {
          source === FullscreenLight
            ? setSource(exitFullscreenLight)
            : setSource(FullscreenLight);
        }}
      />
    </div>
  );
};

export default Fullscreen;
