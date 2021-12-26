import Cell from "./Cell";
import { useEffect, useState } from "react";
import styled from "styled-components";

const isFull = (board) => {
  return !board.some((element) => {
    return element === "";
  });
};

const styledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5% 10% 5% 22%;
  
`

const Board = ({
  setBoard,
  board,
  logo,
  setLogo,
  scoreCross,
  setScoreCross,
  scoreCircle,
  setScoreCircle,
}) => {
  const [radar, setRadar] = useState(Array(9).fill(false));

  useEffect(() => {
    if (winner(board, "X")) {
      alert("X wins");
      setScoreCross(scoreCross + 1);
      setBoard(Array(9).fill(""));
    } else if (winner(board, "O")) {
      alert("O wins");
      setScoreCircle(scoreCircle + 1);
      setBoard(Array(9).fill(""));
    } else if (isFull(board)) {
      alert("DRAW!");
      setBoard(Array(9).fill(""));
    }
  }, [board, scoreCircle, scoreCross, setBoard, setScoreCircle, setScoreCross]);

  const affectChoice = (id) => {
    setBoard(
      board.map((element, index) => {
        if (index === id) {
          let symbol = logo;
          logo === "X" ? setLogo("O") : setLogo("X");
          return symbol;
        }
        return element;
      })
    );
  };

  return (
    <styledDiv className="board">
      {board.map((element, index) => {
        return (
          <Cell
            id={index}
            value={element}
            radar={radar}
            setRadar={setRadar}
            affectChoice={affectChoice}
          />
        );
      })}
    </styledDiv>
  );
};

export default Board;

const winner = (board, logo) => {
  return (
    (board[0] === board[1] && board[1] === board[2] && board[2] === logo) ||
    (board[3] === board[4] && board[4] === board[5] && board[5] === logo) ||
    (board[6] === board[7] && board[7] === board[8] && board[8] === logo) ||
    (board[0] === board[3] && board[3] === board[6] && board[6] === logo) ||
    (board[1] === board[4] && board[4] === board[7] && board[7] === logo) ||
    (board[2] === board[5] && board[5] === board[8] && board[8] === logo) ||
    (board[0] === board[4] && board[4] === board[8] && board[8] === logo) ||
    (board[2] === board[4] && board[4] === board[6] && board[6] === logo)
  );
};
