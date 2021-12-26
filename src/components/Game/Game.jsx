import Reset from "./Reset";
import Board from "./Board.jsx";
import Score from "./Score.jsx";
import { useState } from "react";
import styled from "styled-components";
import ToggleTheme from "../UI/ToggleTheme.jsx";
import Fullscreen from "../UI/Fullscreen.jsx";

const StyledTitle = styled.h1`
  font-family: "Wallpoet", cursive;
  background-image: linear-gradient(90deg, red, blue);
  background-clip: text;
  color: transparent;
  text-align: center;
  font-size: 6rem;
  margin: 0 auto;
`;

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
    <div>
      <ToggleTheme theme={theme} setTheme={setTheme} />
      <Fullscreen theme={theme} />
      <StyledTitle theme={theme}>Tic Tac Toe</StyledTitle>
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
