import { useEffect, useState } from "react";
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

  useEffect(() => {
    props.theme ? setSource(dark) : setSource(light);
  }, [props.theme]);

  return (
    <StyledToggleTheme>
      <img
        alt="dark mode"
        onClick={() => {
          props.setTheme(!props.theme);
        }}
        src={source.toString()}
      />
    </StyledToggleTheme>
  );
};

export default ToggleTheme;
