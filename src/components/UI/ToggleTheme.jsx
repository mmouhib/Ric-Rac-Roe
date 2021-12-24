import { useState } from "react";
import dark from "../../img/ToggleTheme/dark.png";
import light from "../../img/ToggleTheme/light.png";

const ToggleTheme = () => {
  const [source, setSource] = useState(dark);

  return (
    <div className="toggle-theme">
      <img
        alt="dark mode"
        onClick={() => {
          source === dark ? setSource(light) : setSource(dark);
        }}
        src={source.toString()}
      />
    </div>
  );
};

export default ToggleTheme;
