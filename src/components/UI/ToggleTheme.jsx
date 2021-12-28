import { useState } from "react";
import styled from "styled-components";
import dark from "../../img/ToggleTheme/dark.png";
import light from "../../img/ToggleTheme/light.png";

const StyledToggleTheme = styled.div`
  position: absolute;
  top: 2%;
  left: 1%;
`;

const ToggleTheme = (props) => {
  const [source, setSource] = useState(dark);

  return (
    <StyledToggleTheme>
      <img
        alt="dark mode"
        onClick={() => {
          source === dark ? setSource(light) : setSource(dark);
          props.setTheme(!props.theme);
          console.log(props.theme);
        }}
        src={source.toString()}
      />
    </StyledToggleTheme>
  );
};

export default ToggleTheme;
