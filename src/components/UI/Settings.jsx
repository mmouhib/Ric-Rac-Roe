import styled from "styled-components";
import { useState, useEffect } from "react";
import FullscreenDark from "../../img/Fullscreen/fullscreenDark.png";
import FullscreenLight from "../../img/Fullscreen/fullscreenLight.png";
import exitFullscreenDark from "../../img/Fullscreen/exitFullscreenDark.png";
import exitFullscreenLight from "../../img/Fullscreen/exitFullscreenLight.png";

const StyledFullscreen = styled.div`
  position: absolute;
  top: 2%;
  right: 1%;
`;

const Settigns = ({ theme }) => {
  const [source, setSource] = useState(FullscreenDark);

  useEffect(() => {
    if (source === FullscreenLight) setSource(FullscreenDark);
    else if (source === FullscreenDark) setSource(FullscreenLight);
    else if (source === exitFullscreenLight) setSource(exitFullscreenDark);
    else if (source === exitFullscreenDark) setSource(exitFullscreenLight);
  }, [theme]);

  // return (
  //   <StyledFullscreen>
  //     <img
  //       src={source.toString()}
  //       alt="FullscreenDark"
  //       onClick={() => {
  //         // toggle fullscreen
  //         if (source === FullscreenLight || source === FullscreenDark) {
  //           document.documentElement.requestFullscreen();
  //         } else {
  //           document.exitFullscreen();
  //         }
  //         // change icon on click
  //         if (source === FullscreenLight) setSource(exitFullscreenLight);
  //         else if (source === FullscreenDark) setSource(exitFullscreenDark);
  //         else if (source === exitFullscreenLight) setSource(FullscreenLight);
  //         else setSource(FullscreenDark);
  //       }}
  //     />
  //   </StyledFullscreen>
  // );
};

export default Settigns;
