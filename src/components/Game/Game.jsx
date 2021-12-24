import Reset from "./Reset";
import Board from "./Board.jsx";
import Score from "./Score.jsx";
import { useState } from "react";
import ToggleTheme from "../UI/ToggleTheme.jsx";
import Fullscreen from "../UI/Fullscreen.jsx";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [logo, setLogo] = useState("X");

  return (
    <div className="Game">
      <ToggleTheme />
      <Fullscreen />
      <h1 className="title">Tic Tac Toe</h1>
      <Board setBoard={setBoard} board={board} logo={logo} setLogo={setLogo} />
      <Reset setBoard={setBoard} />
      <Score />
    </div>
  );
};

export default Game;
