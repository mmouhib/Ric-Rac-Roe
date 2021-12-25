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
  const [theme, setTheme] = useState(true);

  const resetBoard = () => {
    setBoard(Array(9).fill(""));
  };

  const resetScore = () => {
    setScoreCross(0);
    setScoreCircle(0);
  };

  return (
    <div className="Game">
      <ToggleTheme theme={theme} setTheme={setTheme} />
      <Fullscreen theme={theme} />
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
      <Reset reset={resetBoard} content="reset board" />
      <Score scoreCross={scoreCross} scoreCircle={scoreCircle} />
      <Reset reset={resetScore} content="reset score" />
    </div>
  );
};

export default Game;
