import Game from "./components/Game/Game";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #282c34;
    font-family: 'Road Rage', cursive;
  }
`;

const App = () => {
  return (
    <div className="cnt">
      <GlobalStyle />
      <Game />
    </div>
  );
};

export default App;
