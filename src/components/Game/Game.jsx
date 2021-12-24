import Reset from "./Reset";
import Board from "./Board.jsx";
import Score from "./Score.jsx";
import { useState } from "react";
import ToggleTheme from "../UI/ToggleTheme.jsx";
import Fullscreen from "../UI/Fullscreen.jsx";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [logo, setLogo] = useState("X");
  const [scoreCross, setScoreCross] = useState(0);
  const [scoreCircle, setScoreCircle] = useState(0);

  return (
    <div className="Game">
      <ToggleTheme />
      <Fullscreen />
      <h1 className="title">Tic Tac Toe</h1>
      <Board
        setBoard={setBoard}
        board={board}
        logo={logo}
        setLogo={setLogo}
        scoreCross={scoreCross}
        scoreCircle={scoreCircle}
        setScoreCross={setScoreCross}
        setScoreCircle={setScoreCircle}
      />
      <Reset setBoard={setBoard} />
      <Score scoreCross={scoreCross} scoreCircle={scoreCircle} />
    </div>
  );
};

export default Game;
