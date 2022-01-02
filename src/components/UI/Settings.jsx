import styled from "styled-components";
import { useState, useEffect } from "react";
import SettingsLight from "../../img/SettingsIcons/dark.png";
import SettingsDark from "../../img/SettingsIcons/light.png";
import dark from "../../img/ToggleTheme/dark.png";
import light from "../../img/ToggleTheme/light.png";

const StyledSettings = styled.div`
  //position: absolute;
  //top: 8%;
  //right: 47%;
  margin: -0.4% 50%;
`;

const Settings = ({ theme, setModalIsOpen }) => {
  const [source, setSource] = useState(SettingsLight);

  useEffect(() => {
    theme ? setSource(SettingsDark) : setSource(SettingsLight);
  }, [theme]);

  return (
    <StyledSettings>
      <img
        src={source.toString()}
        onClick={() => setModalIsOpen(true)}
        alt="FullscreenDark"
      />
    </StyledSettings>
  );
};

export default Settings;
