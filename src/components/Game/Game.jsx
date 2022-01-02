import Modal from "./Modal";
import Reset from "./Reset";
import Board from "./Board.jsx";
import Score from "./Score.jsx";
import { useState } from "react";
import Settings from "../UI/Settings.jsx";
import Fullscreen from "../UI/Fullscreen.jsx";
import ToggleTheme from "../UI/ToggleTheme.jsx";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import { lightTheme, darkTheme } from "../../themes";
import { GlobalStyle, StyledTitle } from "../../styles/Game.Styled";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [theme, setTheme] = useState(true);
  const [logo, setLogo] = useState("X");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [score, setScore] = useState({
    scoreCross: 0,
    scoreCircle: 0,
    scoreDraw: 0,
  });

  const [cellBorderRadius, setCellBorderRadius] = useState("25%");

  const resetBoard = () => {
    setBoard(Array(9).fill(""));
  };

  const resetScore = () => {
    setScore({
      scoreCross: 0,
      scoreCircle: 0,
      scoreDraw: 0,
    });
  };

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <ModalProvider>
        <GlobalStyle />
        <div>
          <Modal
            setTheme={setTheme}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            setCellBorderRadius={setCellBorderRadius}
          />
          <ToggleTheme theme={theme} setTheme={setTheme} />
          <Fullscreen theme={theme} />
          <StyledTitle theme={theme}>Ric Rac Roe</StyledTitle>
          <Settings setModalIsOpen={setModalIsOpen} theme={theme} />
          <Board
            cellBorderRadius={cellBorderRadius}
            board={board}
            setBoard={setBoard}
            logo={logo}
            setLogo={setLogo}
            score={score}
            setScore={setScore}
          />
          <Reset reset={resetBoard} content="Reset Board" />
          <Score score={score} />
          <Reset reset={resetScore} content="Reset Score" />
        </div>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default Game;
