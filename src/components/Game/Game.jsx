import Reset from "./Reset";
import { useState } from "react";
import Board from "./Board.jsx";
import Score from "./Score.jsx";
import ToggleTheme from "../UI/ToggleTheme.jsx";
import Fullscreen from "../UI/Fullscreen.jsx";

// checks if the board is full and cannot accept more inputs
const filledBoard = (board) => {
  return !board.some((element) => {
    return element === "";
  });
};

// compare the parameters to simplify multiple comparison in winner func
const compareElements = (
  fstElement,
  secElement,
  thirdElement,
  fourthElement
) => {
  return (
    fstElement === secElement &&
    secElement === thirdElement &&
    thirdElement === fourthElement
  );
};

// checks if the given logo is a winner
const winner = (board, logo) => {
  return (
    // horizontal
    compareElements(board[0], board[1], board[2], logo) ||
    compareElements(board[3], board[4], board[5], logo) ||
    compareElements(board[6], board[7], board[8], logo) ||
    // vertical
    compareElements(board[0], board[3], board[6], logo) ||
    compareElements(board[1], board[4], board[5], logo) ||
    compareElements(board[2], board[5], board[8], logo) ||
    // diagonal
    compareElements(board[0], board[4], board[8], logo) ||
    compareElements(board[2], board[5], board[8], logo)
  );
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [logo, setLogo] = useState("X");

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
        winner={winner}
      />
      <Reset setBoard={setBoard} />
      <Score />
    </div>
  );
};

export default Game;
